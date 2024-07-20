import { ReactNode } from "react"
import { AppContextProvider } from "./AppContext"
import {SocketProvider} from "./SocketContext"
import { ViewContextProvider } from "./ViewContext"
import {ChatContextProvider} from "./ChatContext"

 
const AppProvider = ({children}: {children: ReactNode}) => {
  return (
     <AppContextProvider>
        <SocketProvider>
         <ViewContextProvider>
            <ChatContextProvider>
             {children}
            </ChatContextProvider>
         </ViewContextProvider>
        </SocketProvider>
     </AppContextProvider>
  )
}

export default AppProvider
