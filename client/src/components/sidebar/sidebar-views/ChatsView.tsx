import ChatList from "@/components/chats/ChatList";
import useResponsive from "@/hooks/useResponsive"

 
const ChatsView = () => {
    const {viewHeight} = useResponsive();
  return (
    <div 
    className="flex min-h-[400px] w-full flex-col gap-2 p-4"
    style={{height: viewHeight}}
    >
     <h1 className="view-title">
        Group CHats
     </h1>
     <ChatList/>
     <ChatList/>
    </div>
  )
}

export default ChatsView
