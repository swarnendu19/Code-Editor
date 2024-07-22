import useResponsive from "@/hooks/useResponsive"

 
const RunView = () => {
  const {viewHeight} = useResponsive()
  return (
    <div className="flex flex-col items-center gap-2 p-4"
         style={{height:viewHeight}}
    >
      <h1 className="view-title">
       Run Code
      </h1>
      <div className="relative w-full">
        <select
        className="w-full rounded-md border-none bg-darkHover px-4 py-2 text-white outline-none"
        value={JSON.stringify(selectedLanguage)}
        >

        </select>
      </div>     
    </div>
  )
}

export default RunView
