// src/context/ViewContext.tsx

import React, { createContext, ReactNode, useState } from 'react';
import { ViewContextType } from '@/types/view';

// Create the context
const ViewContext = createContext<ViewContextType | null>(null);

const ViewContextProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    return (
        <ViewContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </ViewContext.Provider>
    );
};

export { ViewContext, ViewContextProvider };
