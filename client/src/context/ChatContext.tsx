import { ChatContext, ChatMessage } from "@/types/chat"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useSocket } from "./SocketContext"
import { SocketEvent } from "@/types/socket"

const ChatContext = createContext<ChatContext | null>(null)


const ChatContextProvider = ({children}: {children: ReactNode}) => {
    const{socket} = useSocket()
    const [messages , setMessages ] = useState<ChatMessage[]>([])
    const [isNewMessage, setIsNewMessage] = useState<boolean>(false)
    const [lastScrollHeight, setLastScrollHeight] = useState(0)
    
    useEffect(()=>{
        socket.on(SocketEvent.RECEIVE_MESSAGE,({message}: {message: ChatMessage})=>{
            setMessages((messages) => [...messages, message])           
            setIsNewMessage(true)
        })
        return ()=> {
            socket.off(SocketEvent.RECEIVE_MESSAGE)
        }
    }, [socket])
  return (
     <ChatContext.Provider 
     value={{
        messages, 
        setMessages, 
        isNewMessage, 
        setIsNewMessage, 
        lastScrollHeight, 
        setLastScrollHeight
        }}>
        {children}
     </ChatContext.Provider>
  )
}

export const useChatRoom = ()=>{
    const context = useContext(ChatContext)
    if(context === null){
        throw new Error("useChatRoom Context Must be Used inside ChatContextProvider");
    }
    return context;
      
}

export default ChatContextProvider
