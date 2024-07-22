import { Language, RunContextType } from "@/types/run"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import instance from "@/api/"


 const RunCodeContext = createContext<RunContextType | null>(null)

const RunCodeContextProvider = ({children}: {children: ReactNode}) => {
    const [input , setInput] = useState<string>("");
    const [supportedLanguage, setSupportedLanguage] = useState<Language[]>([])
    const fetchSupportedLanguage = async ()=>{
        try {
            const language = await instance.get("/runtimes")
            setSupportedLanguage(language.data)
        } catch (error:any) {
            toast.error("Failed to fetch supported Language")
        }
    }
    //Fetching the selected Language
    useEffect(()=>{
        fetchSupportedLanguage()
    },[])

    //Set the Selected language based on the file extension
    useEffect(()=>{
         if(supportedLanguage.length === 0 || )
    })
   return (
     <RunCodeContext.Provider
     value={{
       input , setInput
     }}
     >
        {children}
     </RunCodeContext.Provider>
  )
}

export const useRunCode = ()=>{
    const context = useContext(RunCodeContext)
    if(!context){
        throw new Error("useRunCode must be used within a RunCodeContextProvider")
    }
    return context;
}

export default RunCodeContext
