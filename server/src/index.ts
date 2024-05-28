// Setup and Dependencies:
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import http, { get } from "http";
import path from "path";
import cors from "cors";
import { Server as SocketIOServer, Socket } from "socket.io"; // Correct import
import { User, USER_CONNECTION_STATUS } from "./types/user";

// dotenv is used to load environment variables from a .env file.
dotenv.config();

// The express framework is used to create a web server.
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(express.static(path.join(__dirname, 'public')));

// Server and Socket.IO Setup:

// An HTTP server is created using http.createServer, passing the express app.
const server = http.createServer(app);

// A Socket.IO server is initialized, allowing all origins to connect.
const io = new SocketIOServer(server, {
    cors: {
        origin: "*"
    }
});

// User Management:

// A list called userSocketMap is used to keep track of connected users.
 let userSocketMap: User[] = [
    {
        username: "h",
        roomId: "1",
        socketId: "4",
        status: USER_CONNECTION_STATUS.ONLINE,
        currentFile: "index.js",
        cursorPosition: 2,
        typing: false
    },
    {
        username: "w",
        roomId: "2",
        socketId: "3",
        status: USER_CONNECTION_STATUS.OFFLINE ,
        currentFile: "index.js",
        cursorPosition: 2,
        typing: false
    }
];

// getUsersInRoom(roomId: string): User[]:
function getUsersInRoom(roomId: string): User[] {
    return userSocketMap.filter(user => user.roomId === roomId);
}

// getRoomId(socketId: string): string | null:
function getRoomId(socketId: string): string | null {
    const userRoomId = userSocketMap.find(user => user.socketId === socketId)?.roomId;
    if (userRoomId) {
        return userRoomId;
    } else {
        console.error("Room ID is undefined for socket ID:", socketId);
        return null;
    }
}

// getUserBySocketId(socketId: string): User | null:
function getUserBySocketId(socketId: string): User | null {
    const user = userSocketMap.find(user => user.socketId === socketId);
    if (user) {
        return user;
    } else {
        return null;
    }
}

// Socket.IO Event Handlers:
io.on('connection', (socket: Socket) => {
    socket.on("join-request", ({ roomId, username }) => {
        // check the user exist or not using suitable function
        const isUserExist = getUsersInRoom(roomId).find(user => user.username === username);
        // if the user exist send message Username already exist and return
        if (isUserExist) {
            io.to(socket.id).emit("user-exist");
            return;
        }
        // if not create a user
        const user: User = {
            username: username,
            roomId: roomId,
            status: USER_CONNECTION_STATUS.ONLINE,
            socketId: socket.id,
            currentFile: "index.js",
            cursorPosition: 2,
            typing: false
        };
        // push the user into the array
        userSocketMap.push(user);
        // join the user in socket room
        socket.join(roomId);
        // emit an event UserJoined
        socket.broadcast.to(roomId).emit("user-joined");
        const users = getUsersInRoom(roomId);
        io.to(socket.id).emit("join-accepted", { user, users });
    });

    socket.on("disconnect", ()=>{
       const user = getUserBySocketId(socket.id)
       if(!user) return
       const roomId = user.roomId
       socket.broadcast.to(roomId).emit("disconnected",{user})
       userSocketMap = userSocketMap.filter((user)=> user.socketId !== socket.id)
       socket.leave(roomId)
    })

    // Socket On Sync File Event Listen function=> Which takes files,currentFile, socketId and emit the sync file event to the targeted room
    socket.on("sync-file",({file,currentFile, socketId})=>{
        const roomId = getRoomId(socketId)
        if(!roomId) return
        socket.to(roomId).emit("sync-file", {file, currentFile})
    })

    //Socket on fileCreated event DO=> take file Get and notifies / broadcast all users in same room about the new file.
    socket.on("file-created",({file})=>{
        const roomId = getRoomId(socket.id)
        if(!roomId) return
        socket.broadcast.to(roomId).emit("file-created",{file})
    })
    //Similar for Update,Renamed,deleted
    socket.on("file-updated",({file})=>{
        const roomId = getRoomId(socket.id)
        if(!roomId) return
        socket.broadcast.to(roomId).emit("file-updated",{file})
    })

    socket.on("file-renamed", ({file})=>{
          const roomId = getRoomId(socket.id)
          if(!roomId) return
          socket.broadcast.to(roomId).emit("file-renamed", {file})
    })

    socket.on("file-deleted", ({file})=>{
        const roomId = getRoomId(socket.id)
        if (!roomId) {
            return
        }
        socket.broadcast.to(roomId).emit("file-deleted", {file})
    })

    //Socket on User Offline => takes the socketId as Argument Map over userSocketMap and check If the socketId matches, 
    //it creates a new user object with the same properties as the existing user but with the status set to USER_CONNECTION_STATUS.OFFLINE.
    socket.on("user-offline",({socketId})=>{
        userSocketMap = userSocketMap.map((user)=>{
            if(socketId == user.socketId) {
                return {...user , status: USER_CONNECTION_STATUS.OFFLINE}
            }
            return user
      })
      const roomId = getRoomId(socketId)
      if(!roomId) return
        socket.broadcast.to(roomId).emit("user-offline",{socketId})
    })

    socket.on("user-online", ({socketId})=>{
        userSocketMap = userSocketMap.map((user)=>{
            if(socketId == user.socketId) {
                return {...user , status: USER_CONNECTION_STATUS.OFFLINE}
            }
            return user
      })  
      
        const roomId = getRoomId(socket.id)
        if(!roomId) return
        socket.broadcast.to(roomId).emit("user-online", {socketId})
     })
    //Socket on "send message" Do=> take the message Broadcast to the room
    socket.on("send-message", ({message})=>{
        const roomId = getRoomId(socket.id)
        if(!roomId) return 
        socket.broadcast.to(roomId).emit("send-message", {message})
     })
    // On typing start Do=> take cursorPosition , map over userSocketmap When a user starts typing, the server updates the user's typing status and notifies other users in the room
    socket.on("typing-start", ({cursorPosition})=>{
        userSocketMap = userSocketMap.map((user) =>{
            if (socket.id === user.socketId){
                return {...user, typing: false , cursorPosition}
            }
            return user;
         })
        const user  = getUserBySocketId(socket.id)
        if(!user) return
        const roomId = user.roomId
        socket.broadcast.to(roomId).emit("typing-start", {user})
    }) 
    socket.on("typing-pause", ()=>{
        userSocketMap = userSocketMap.map((user)=>{
            if(socket.id === user.socketId){
                return {...user, typing: false}
            }
            return user
        })
        const user = getUserBySocketId(socket.id)
        if(!user) return 
        const roomId = getRoomId(socket.id)
        if(!roomId) return 
        socket.broadcast.to(roomId).emit("typing-pause", {user})
    })

    socket.on("request-drawing", ()=>{
        const roomId = getRoomId(socket.id)
        if(!roomId) return
        socket.broadcast.to(roomId).emit("request-drawing", {socketId : socket.id})
    })

    socket.on("sync-drawing", ({drawingData, socketId})=>{
        socket.broadcast.to(socketId).emit("sync-drawing", {drawingData})
    })
    socket.on("drawing-update", ({newData})=>{
       const roomId = getRoomId(socket.id)
       if(!roomId) return
       socket.broadcast.to(roomId).emit("drawing-update", {newData})
    })
});

// Starting the Server:
// The server listens on a specified port (from the environment variable PORT or defaulting to 3000).
 

const PORT = process.env.PORT || 3000

app.get("/", (req: Request, res: Response) => {
	// Send the index.html file
	res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
