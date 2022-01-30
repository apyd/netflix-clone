import { useState, useEffect } from 'react'

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [])
    return scrollPosition
}

export default useScrollPosition