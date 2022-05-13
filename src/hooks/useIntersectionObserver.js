import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options) => {
    
    const imageObsever = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleIntersection = (entries) => {
        const [ entry ] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        
        const observer = new IntersectionObserver(handleIntersection, options);

        if (imageObsever.current) observer.observe(imageObsever.current);

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (imageObsever.current) observer.unobserve(imageObsever.current)
        }

    }, [ imageObsever, options ]);

    return [ imageObsever, isVisible ]
};