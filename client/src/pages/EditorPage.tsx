import SideBar from "../components/sidebar/SideBar"
import Splitter from "../components/Splitter"
import WorkSpace from "../components/WorkSpace"

 
const EditorPage = () => {
    //Make a hook of useIsUserActive => which states the user is active or not 

    //Enable fullscreen mode hook => useFullScreen()
  return (
    <Splitter>
      <SideBar/>
      <body className="bg-white text-red-600">
        Hello
      </body>
      {/* <WorkSpace/> */}
    </Splitter>
  )
}

export default EditorPage
