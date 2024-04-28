import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

interface IAppContext {
    theme: string;
    setTheme: (theme: string) => void;
}

export const AppContext = createContext<IAppContext | null >(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({children})=>{
    const [theme, setTheme] = useState<string>("tomorrow_night_eighties");

    return (
        <AppContext.Provider value={{theme, setTheme}}>
            {children}
        </AppContext.Provider>
    )
}

export const useEditor = () => useContext(AppContext);