import { useState, useEffect, useCallback } from 'react'

export const useWindowSize = () => {
    const isClient = typeof window === 'object';
    const getWidth = useCallback(() => {
        return isClient ? window.innerWidth : undefined
    }, [isClient])
    const getHeight = useCallback(() => {
        return isClient ? window.innerHeight : undefined
    }, [isClient])

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
    }, [isClient, getWidth, getHeight])
    return { windowWidth, windowHeight }
}