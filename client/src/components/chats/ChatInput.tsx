import { LuSendHorizonal } from "react-icons/lu"

 
const ChatInput = () => {
  const handleSendMessage = ()=>{}
  const InputRef = ()=>{}
  return (
     <form  
      onSubmit={handleSendMessage}
      className="flex justify-between rounded-md border border-primary"
     >
      <input
       type="text"
       placeholder="Enter the Message..."
       className="w-full flex-grow rounded-md border-none bg-dark p-2 outline-none"
       ref={InputRef}
      />
      <button
       className="flex items-center justify-center rounded-r-md bg-primary p-2 text-black"
       type="submit" 
      >
        <LuSendHorizonal size={24}/>
      </button>
     </form>
  )
}

export default ChatInput
