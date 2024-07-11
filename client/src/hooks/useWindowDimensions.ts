
import { useEffect, useState } from "react"


// Make function named Hook
//inside Functions=>
    //Two State Variable=> One Store the width and height of window, 
    //another store the window is less than 768 or not
    //UseEffect Hook=> make a function updateWD 
    // This fn settheWindow Dimensions and setIsMobile end the fn
    //Add Event listner "resize " on which call the function
    //return callback of this eventListner 
// return the spreded window Dimensions, isMobile Variable

interface windowDimesions {
    width: number,
    height: number
}

const useWindowDimensions = ()=>{
    const [windowDimension, setWindowDimension] = useState<windowDimesions >({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(()=>{
        const updateWidthDimensions = ()=>{
            setWindowDimension({
                width:window.innerWidth,
                height: window.innerHeight
            })
            setIsMobile(window.innerHeight < 768)
        }
        window.addEventListener("resize", updateWidthDimensions);
        return ()=>{
            window.addEventListener("resize", updateWidthDimensions)
        }
    },[])
    return {...windowDimension, isMobile}
}

export default useWindowDimensions;