import Form from "../components/forms/Form"

 
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-16">
      <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
       <div className="flex w-full animate-up-down ">
        <img
         src="../assets/illustration.png"
         alt="CodeEditor Illustration"
         className="mx-auto w-[250px] sm:w-[400px]"
        />
       </div>
       <div className="flex w-full items-center justify-center sm:w-1/2">
        <Form/>
       </div>
      </div>
    </div>
  )
}

export default HomePage
