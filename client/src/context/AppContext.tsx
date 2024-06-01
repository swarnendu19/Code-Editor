import React, {createContext, useContext, useState } from 'react'
import { ACTIVITY_STATE, AppContextType, DrawingData } from '../types/app'
import { RemoteUser, User, USER_STATUS } from '../types/user'

const AppContext = createContext<AppContextType | null>(null)

const AppContextProvider: React.FC<{children: React.ReactNode}> = ({children})=>{
    const [users, setUsers] = useState<RemoteUser[]>([])
    const [status, setStatus] = useState<USER_STATUS>(USER_STATUS.INITIAL)
    const [currentUser, setCurrentUser] = useState<User>({
        username: "",
        roomId: "",
    })
    const [activityState, setActivityState] = useState<ACTIVITY_STATE>(
        ACTIVITY_STATE.CODING,
    )
    const [drawingData, setDrawingData] = useState<DrawingData>(null)

    return(
        <AppContext.Provider value={{
            users, setUsers, 
            currentUser, setCurrentUser, 
            status,setStatus,
            activityState,setActivityState,
            drawingData,setDrawingData
         }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext =  (): AppContextType => {
     const context = useContext(AppContext)
     if(!context){
        throw new Error("Context not Present");
     }
     return context;
}

export {AppContext}
export default AppContextProvider