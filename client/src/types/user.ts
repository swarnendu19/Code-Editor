export interface User {
    username: string
    roomId: string
}

export enum USER_CONNECTION_STATUS {
    OFFLINE = "offline",
    ONLINE= "online"
}

export interface RemoteUser extends User{
    status: USER_CONNECTION_STATUS,
    cursorPosition: number,
    typing: boolean,
    currentFile: string,
    socketId: string
}
 
 export enum USER_STATUS {
        INITIAL = "initial",
        CONNECTING = "connecting",
        ATTEMPTING_JOIN = "attempting-join",
        JOINED = "joined",
        CONNECTION_FAILED = "connection-failed",
        DISCONNECTED = "disconnected",
    }