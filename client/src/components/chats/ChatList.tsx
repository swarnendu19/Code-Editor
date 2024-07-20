import { useAppContext } from "@/context/AppContext"
import { useChatRoom } from "@/context/ChatContext"

 
const ChatList = () => {
  const {messages} = useChatRoom()
  const {currentUser} = useAppContext()
   return (
    <div 
    className='flex-grow overflow-auto rounded-md bg-darkHover p-2'
    >
     {
      messages.map((message, index)=>{
        return (
          <div 
          key={index} 
          className={"mb-2 w-[80%] self-end break-words rounded-md bg-dark px-3 py-2"+(
            message.username === currentUser.username 
            ? "ml-auto"
            : ""
          )}
          >
           <div className="flex justify-between">
            <span className="text-xs text-primary">
              {message.username}
            </span>
            <span className="text-xs text-white">
              {message.timestamp}
            </span>
           </div>
           <p className="py-1">
            {message.message}
           </p>
          </div>
        )
      })
     } 
    </div>
  )
}

export default ChatList
