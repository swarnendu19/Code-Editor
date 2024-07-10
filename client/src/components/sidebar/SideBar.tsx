import useResponsive from "@/hooks/useResponsive"
import classNames from "classnames"
import SidebarButton from "./sidebar-views/SidebarButton"
import { VIEWS } from "@/types/view"
import { useViews } from "@/context/ViewContext"

 
const SideBar = () => {
  const {viewIcons } = useViews()
  
  const  {minHeightReached } = useResponsive() 
  return (
     <aside className='flex w-full md:h-full md:max-h-full md:min-h-full md:w-auto'>
        <div
                className={classNames(
                    "fixed bottom-0 left-0 z-50 flex h-[50px] w-full gap-6 self-end overflow-auto border-t border-darkHover bg-dark p-3 md:static md:h-full md:w-[50px] md:min-w-[50px] md:flex-col md:border-r md:border-t-0 md:p-2 md:pt-4",
                    {
                        hidden: minHeightReached,
                    },
                )}
            >
         <SidebarButton 
          viewName = {VIEWS.FILES}
          icon = {viewIcons[VIEWS.FILES]}
         />
       </div>
     </aside>
  )
}

export default SideBar
