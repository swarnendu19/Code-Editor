 import logo from "../../assets/logo.svg"


const Form = () => {

  const joinRoom = ()=>{}
  const handleInputChanges =()=>{}
  const createNewRoomId = ()=>{}
  return (
    <div className="flex w-full max-w-[500px] flex-col items-center justify-center gap-4 sm:w-[500px] sm:p-8">
      <img src={logo} alt="logo" className="w-full"/>
      <form onSubmit={joinRoom} className="flex w-full flex-col gap-4">
       <input
        type="text"
        name="roomId"
        placeholder="Room Id"
        className="w-full rounded-md border border-gray-500 bg-darkHover px-3 py-3 focus:outline-none"
        onChange={handleInputChanges}
        // value=""
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full rounded-md border border-gray-500 bg-darkHover px-3 py-3 focus:outline-none"
          onChange={handleInputChanges}
          // value= ""
          // ref = ""
        />
        
        <button 
        type="submit"
        className="mt-2 w-full rounded-md bg-primary px-8 py-3 text-lg font-semibold text-black"
        >
          Join
        </button>
      </form>
      <button
          className="cursor-pointer select-none underline"
          onClick={createNewRoomId}
      >
            Create New Room Id
            </button>
    </div>
  )
}

export default Form
