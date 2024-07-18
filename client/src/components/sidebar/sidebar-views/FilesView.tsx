import FileStructureView from "@/components/files/FileStructureView"
import useResponsive from "@/hooks/useResponsive"
import classNames from "classnames"
import { BiArchiveIn } from "react-icons/bi"
import { TbFileUpload } from "react-icons/tb"

 

const FilesView = () => {

  const {viewHeight} = useResponsive()

  const handleOpenDirectory =()=>{}
  const downloadFileAndFolders = ()=>{}
  return (
    <div className="flex select-none flex-col gap-1 px-4 py-2"
    style={{height: viewHeight, maxHeight: viewHeight}}>
       <FileStructureView/>
       <div className={
        classNames(`flex min-h-fit flex-col justify-end pt-2`, )
       }>
       <hr/>
       <button 
        className="mt-2 flex w-full justify-start rounded-md p-2 transition-all hover:bg-darkHover"
        onClick={handleOpenDirectory}
       >
        <TbFileUpload className="mr-2" size={24}/>
        Open File
       </button>
       <button
        className="flex w-full justify-start rounded-md p-2 transition-all hover:bg-darkHover"
         onClick={downloadFileAndFolders}
         >
        <BiArchiveIn className="mr-2" size={22}/>
        Download Code
       </button>
       </div>
    </div>
  )
}

export default FilesView
