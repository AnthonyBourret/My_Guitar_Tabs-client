import React from "react";

function useToastDisplay(isVisible: boolean, setIsVisible: React.Dispatch<React.SetStateAction<boolean>>) {

    // UseEffect to remove the Toast after 4 seconds
    React.useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);
}

export default useToastDisplay;