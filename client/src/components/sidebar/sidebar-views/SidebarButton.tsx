import { useViews } from "@/context/ViewContext"
import { VIEWS } from "@/types/view"

 
interface SidebarButtonProps{
  viewName: VIEWS,
  icons: JSX.Element
}

const SidebarButton = ({viewName, icons}: SidebarButtonProps) => {

  const {activeView,  isSidebarOpen, setIsSidebarOpen, setActiveView} = useViews()
  const handleViewClick =(viewName: VIEWS)=>{
     if(viewName === activeView ) setIsSidebarOpen(!isSidebarOpen)
     else{
      setIsSidebarOpen(true)
      setActiveView(viewName)
    }
  }
  return (
     <button
      className="relative flex justify-center items-center"
      onClick={()=> handleViewClick(viewName)}
     >
      {icons}
     </button>
  )
}

export default SidebarButton
