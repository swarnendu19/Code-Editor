// src/context/ViewContext.tsx

import  { createContext, ReactNode, useContext, useState } from 'react';
import { ViewContextType } from '@/types/view';

// Create the context
const ViewContext = createContext<ViewContextType | null>(null);

export const useViews = (): ViewContextType => {
    const context = useContext(ViewContext)
    if (!context) {
         
        throw new Error("useViews must be used within a ViewContextProvider")
    }
    return context
}

const ViewContextProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    return (
        <ViewContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </ViewContext.Provider>
    );
};

export default ViewContext
export {ViewContextProvider };
