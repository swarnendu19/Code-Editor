import { createContext, ReactNode, useContext, useState } from 'react';
import { ViewContextType } from '@/types/view';

// Create the context with a more meaningful default value if desired
const ViewContext = createContext<ViewContextType | null>(null);

// Custom hook to use the ViewContext
export const useViews = (): ViewContextType => {
    const context = useContext(ViewContext);
    if (!context) {
        throw new Error("useViews must be used within a ViewContextProvider");
    }
    return context;
}

// Context provider component
const ViewContextProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    return (
        <ViewContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </ViewContext.Provider>
    );
};

export default ViewContext;
export { ViewContextProvider };
