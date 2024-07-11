import { ReactNode } from "react"
import Split from "react-split"
 
const Splitter = ({children}:{children: ReactNode}) => {

  const getGutter = ()=>{
    const gutter = document.createElement("div")
    gutter.className = "h-full cursor-e-resizer hidden md:block ";
    gutter.style.backgroundColor = "#e1e1ffb3"
    return gutter;
  }

  const getSizes = ()=>{
     
  }
  return (
     <Split
     sizes={[25, 75]}
     minSize={100}
     expandToMin={false}
     gutter={getGutter}
     gutterAlign="center"
     snapOffset={30}
     dragInterval={1}
     direction="horizontal"
     cursor="e-resize"
     >
      {children}
     </Split>
  )
}

export default Splitter
