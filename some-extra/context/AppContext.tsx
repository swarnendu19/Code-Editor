import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

interface IAppContext {
    theme: string;
    setTheme: (theme: string) => void;
    isSubmitting: boolean;
    setIsSubmitting: (isSubmitting: boolean) => void;
    language:string;
    setLanguage: (language: string)=> void;
}


export const AppContext = createContext<IAppContext | null >(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({children})=>{
    const [theme, setTheme] = useState<string>("tomorrow_night_eighties");
    const [isSubmitting , setIsSubmitting] = useState<boolean>(false)
    const [language, setLanguage] = useState("cpp");

    return (
        <AppContext.Provider value={{
            theme,
            setTheme, 
            isSubmitting, 
            setIsSubmitting,
            language,
            setLanguage }}>
            {children}
        </AppContext.Provider>
    )
}

export const useEditor = () => useContext(AppContext);