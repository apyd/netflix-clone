import { useState, useEffect } from 'react'

export const useWindowSize = () => {
    const isClient = typeof window === 'object';
    function getWidth() {
        return isClient ? window.innerWidth : undefined
    }
    function getHeight() {
        return isClient ? window.innerHeight : undefined
    }

    const [windowWidth, setWindowWidth] = useState(getWidth);
    const [windowHeight, setWindowHeight] = useState(getHeight);
    useEffect(() => {
        if (!isClient) return false;

        function handleResize() {
            setWindowWidth(getWidth)
            setWindowHeight(getHeight)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return { windowWidth, windowHeight }
}