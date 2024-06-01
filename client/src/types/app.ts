import { RemoteUser, User, USER_STATUS } from "./user";
import { StoreSnapshot, TLRecord } from "@tldraw/tldraw";  

export type DrawingData = StoreSnapshot<TLRecord> | null;

export interface AppContextType {
    users: RemoteUser[];
    setUsers: (
        users: RemoteUser[] | ((users: RemoteUser[]) => RemoteUser[])
    ) => void;
    currentUser: User;
    setCurrentUser: (user: User) => void;
    status: USER_STATUS;
    setStatus: (status: USER_STATUS) => void;
    activityState: ACTIVITY_STATE;
    setActivityState: (activityState: ACTIVITY_STATE) => void;
    drawingData: DrawingData;
    setDrawingData: (data: DrawingData) => void;
}

export enum ACTIVITY_STATE {
    CODING = "coding",
    DRAWING = "drawing",
}
