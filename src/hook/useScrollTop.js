import { useEffect, useState } from "react";

export default function useScrollTop() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        if (window?.scrollY) {
            setScrollY(window?.scrollY)
        }

        return () => {
            setScrollY(0)
        }
    }, [])


    return scrollY;

}