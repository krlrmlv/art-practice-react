import { useEffect } from "react";

export default function useEventListener({ func, event }) {
    useEffect(() => {
        document.addEventListener(event, func);

        return () => {
            document.removeEventListener(event, func);
        };
    }, [event, func]);
}