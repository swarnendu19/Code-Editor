import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";


function useResponsive() {
    //make a state of minHeightReached, 

    // apply useEffect Hook and if Height is less the 500 and isMobile 
    //Then setMinheightReached as true
    //and setViewHeight as height from the useDimensions hook;
    //Else if isMobile setMinHeightReached as false and setViewHeight as set

    const [minHeightReached, setMinHeightReached] = useState(false);
    const {height, isMobile} = useWindowDimensions();
    const [viewHeight,setViewHeight] = useState(height);

    useEffect(()=>{
        if(height < 500 && isMobile){
            setMinHeightReached(true);
            setViewHeight(height);
        }
        else if(isMobile){
            setMinHeightReached(false);
            setViewHeight(height-50);
        }
        else{
            setMinHeightReached(false)
            setViewHeight(height)
        }
    },[ height, viewHeight, isMobile]
)

return {viewHeight, minHeightReached}
}

export default useResponsive;