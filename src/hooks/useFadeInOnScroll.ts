import type React from 'react'
import { useEffect, useRef, useState } from 'react'

type UseFadeInOnScrollResult = {
    ref: React.RefObject<HTMLElement | null>
    className: string
}

export function useFadeInOnScroll(
    threshold = 0.1,
    animationClass = 'animate-fadeIn',
    initialClass = 'opacity-0'
): UseFadeInOnScrollResult {
    const ref = useRef<HTMLElement | null>(null)
    const [hasFadedIn, setHasFadedIn] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element || hasFadedIn) return

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry?.isIntersecting) {
                    setHasFadedIn(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [threshold, hasFadedIn])

    const className = hasFadedIn ? animationClass : initialClass

    return { ref, className }
}
