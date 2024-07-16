import  { useViews } from "@/context/ViewContext"
import useLocalStorage from "@/hooks/useLocalStorage"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import { ReactNode } from "react"
import Split from "react-split"
  
const Splitter = ({children}:{children: ReactNode}) => {

  //import 3 and build custom hooks => useViews, useWindowDimensions, useLocalStorage
   const {isMobile,width} = useWindowDimensions()
   const {getItem, setItem}  = useLocalStorage();
   const { isSidebarOpen} = useViews()


  const getGutter = ()=>{
    const gutter = document.createElement("div")
    gutter.className = "h-full cursor-e-resizer hidden md:block ";
    gutter.style.backgroundColor = "#e1e1ffb3"
    return gutter;
  }

// If isMobile remove the first part
  //Get the item in localStorage with string "editorSizes"
  //set sizes
  //if savedSizes then sizes is saves as JSON
  //return sizes if isSidebarOpen else return [0,width]
  const getSizes = ()=>{
     if(isMobile) return [0,width]
     const savedSizes = getItem('editorsizes')
     let sizes = [35,65];
     if(savedSizes){
      sizes = JSON.parse(savedSizes)
     } 
     return isSidebarOpen ? sizes : [0,width]
  }

  const getMaxSizes = ()=>{
    if(isMobile) return [0, width]
    return isSidebarOpen ? [Infinity, Infinity] : [0, Infinity]
  }

  const getMinSizes = ()=>{
    if(isMobile) return [0, width]
    return isSidebarOpen ? [350,350] : [50, 0]
  }

  const handleDrag = (sizes: number[])=>{
     setItem("editorsizes", JSON.stringify(sizes))

  }
  
  const getGutterStyle = ()=>({
    width: "7px",
    display: isSidebarOpen && !isMobile ? "block" : "none"
  })
  return (
     <Split
     sizes={getSizes()}
     minSize={getMinSizes()}
     maxSize={getMaxSizes()}
     gutter={getGutter}
     gutterAlign="center"
     snapOffset={30}
     dragInterval={1}
     direction="horizontal"
     cursor="e-resize"
     onDrag={handleDrag}
     gutterStyle={getGutterStyle}
     className="flex h-screen min-h-screen max-w-full items-center justify-center overflow-hidden" 
     >
      {children}
     </Split>
  )
}

export default Splitter
