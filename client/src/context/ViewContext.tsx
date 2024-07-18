import { createContext, ReactNode, useContext, useState } from 'react';
import { ViewContextType, VIEWS } from '@/types/view';
import FilesView from '@/components/sidebar/sidebar-views/FilesView';
import ChatsView from '@/components/sidebar/sidebar-views/ChatsView';
import UsersView from '@/components/sidebar/sidebar-views/UsersView';
import SettingsView from '@/components/sidebar/sidebar-views/SettingsView';
import RunView from '@/components/sidebar/sidebar-views/RunView';

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
    const [activeView, setActiveView] = useState<VIEWS>(VIEWS.FILES)
    const [viewComponents] = useState({
        [VIEWS.FILES]: <FilesView/>,
        [VIEWS.CHATS]: <ChatsView/>,
        [VIEWS.CLIENTS]: <UsersView />,
        [VIEWS.SETTINGS]: <SettingsView />,
        [VIEWS.RUN]: <RunView/>,
    })
    return (
        <ViewContext.Provider 
        value={{ 
           isSidebarOpen, 
           setIsSidebarOpen, 
           activeView, 
           setActiveView , 
           viewComponents
           }}>
            {children}
        </ViewContext.Provider>
    );
};

export default ViewContext;
export { ViewContextProvider };
