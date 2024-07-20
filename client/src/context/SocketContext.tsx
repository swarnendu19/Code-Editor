import { SocketContextType, SocketEvent, SocketId } from "@/types/socket";
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo } from "react";
import {io, Socket}  from "socket.io-client"
import { useAppContext } from "./AppContext";
import { RemoteUser, User, USER_STATUS } from "@/types/user";
import toast from "react-hot-toast";
import {DrawingData} from "@/types/app"

 const SocketContext  = createContext<SocketContextType | null >(null)
 const BACKEND_URL =  "http://localhost:3000/"
const SocketProvider = ({children}: {children: ReactNode}) => {

  const {
    users,
    setUsers,
    setCurrentUser,
    setStatus,
    drawingData,
    setDrawingData,
  } = useAppContext();

  //useMemo memorize the value 
  const socket: Socket = useMemo(()=>
    io(BACKEND_URL, {
      reconnectionAttempts: 2
    })
   ,[])
   // useCallback remember the function for child 
   const handleError = useCallback((err: any)=>{
    console.log("Socket Error" , err);
    setStatus(USER_STATUS.CONNECTION_FAILED)
    //It dismiss all the current toasts
    toast.dismiss();
    toast.error("Failed to connect")
   },[setStatus])

   const handleUsernameExist = useCallback(()=>{
     toast.dismiss();
     setStatus(USER_STATUS.INITIAL)
     toast.error(
      "Username already Exists"
     )
   },[setStatus])

   const handleJoiningAccepted = useCallback(
    ({user, users}: {user: User, users: RemoteUser[]})=>{
      setCurrentUser(user)
      setUsers(users)
      toast.dismiss();
      setStatus(USER_STATUS.JOINED)
      if(users.length > 1){
        toast.loading("Syncing data, Please wait....")
      }
   },[setCurrentUser, setUsers, setStatus])

   const handleUserLeft = useCallback(({user}: {user: User})=>{
       toast.success(`${user.username} left the room`)
       setUsers(users.filter((u:User)=> u.username === user.username))
   },[setUsers, users])

   const handleRequestDrawing = useCallback(
    ({ socketId }: { socketId: SocketId }) => {
        socket.emit(SocketEvent.SYNC_DRAWING, { socketId, drawingData })
    },
    [drawingData, socket],
)

const handleDrawingSync = useCallback(
  ({ drawingData }: { drawingData: DrawingData }) => {
      setDrawingData(drawingData)
  },
  [setDrawingData],
)
   

   //First handle the connection errors
   // Then Check the useName Exist or Not in Socket Connection
   // Accept the join
   //If User Disconnect Handle this function
   // Handle the drawing Request
   // Sync the Drawing  
   useEffect(()=>{
    socket.on("connect_error", handleError)
    socket.on("connection_failed" , handleError)
    socket.on(SocketEvent.USERNAME_EXISTS , handleUsernameExist)
    socket.on(SocketEvent.JOIN_ACCEPTED, handleJoiningAccepted)
    socket.on(SocketEvent.USER_DISCONNECTED, handleUserLeft)
    socket.on(SocketEvent.REQUEST_DRAWING, handleRequestDrawing)
    socket.on(SocketEvent.SYNC_DRAWING, handleDrawingSync)
    
    return () => {
      socket.off("connect_error")
      socket.off("connect_failed")
      socket.off(SocketEvent.USERNAME_EXISTS)
      socket.off(SocketEvent.JOIN_ACCEPTED)
      socket.off(SocketEvent.USER_DISCONNECTED)
      socket.off(SocketEvent.REQUEST_DRAWING)
      socket.off(SocketEvent.SYNC_DRAWING)
  }
   }, [
        handleDrawingSync,
        handleError,
        handleJoiningAccepted,
        handleRequestDrawing,
        handleUserLeft,
        handleUsernameExist,
        setUsers,
        socket,
   ])
  return (
    <SocketContext.Provider
    value={{
        socket
    }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = (): SocketContextType =>{
  const context = useContext(SocketContext)
  if(!context){
    throw new Error("useSocket should be used under SocketProvider")
  }
  return context
}


export { SocketProvider }
export default SocketContext
