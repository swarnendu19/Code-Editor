import { SocketContext } from "@/types/socket";
import { createContext, ReactNode, useContext, useMemo } from "react";
import {io, Socket}  from "socket.io-client"
 

 const SocketContext  = createContext<SocketContext | null >(null)
 const BACKEND_URL =  "http://localhost:3000/"
const SocketProvider = ({children}: {children: ReactNode}) => {
  const socket: Socket = useMemo(()=>
    io(BACKEND_URL, {
      reconnectionAttempts: 2
    })
   ,[])
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

export const useSocket = ()=>{
  const context = useContext(SocketContext)
  if(!context){
    throw new Error("useSocket should be used under SocketProvider")
  }
}

export default SocketProvider;
