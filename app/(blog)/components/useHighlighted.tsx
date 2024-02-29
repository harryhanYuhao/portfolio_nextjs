"use client";
import { useEffect, useRef, useState } from "react";

export function useHighlighted(id: string) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const handleObserver = (entries: any) => {
            entries.forEach((entry: any) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        (useRef()).current = new IntersectionObserver(handleObserver, {
            rootMargin: "0% 0% -35% 0px",
        });

        const elements = document.querySelectorAll("h2");
        elements.forEach((elem) => (useRef()).current.observe(elem));
        return () => (useRef()).current?.disconnect();
    }, []);

    return [activeId === id, setActiveId];
}

