"use client"

import { useEffect } from "react";

function checkScroll() {
    if (window.scrollY <= window.innerHeight) {
        window.location.hash = "#"
    }
}
export default function IdCorrector() {
    useEffect(() => {
        window.addEventListener("scroll", checkScroll, true);
        return () => window.removeEventListener("scroll", checkScroll, true);
    }, []);

    return <></>
}