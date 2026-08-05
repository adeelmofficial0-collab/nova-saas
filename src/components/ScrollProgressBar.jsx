import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollPercent(percent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[60]">
            <div
                className="h-full bg-gradient-to-r from-[#5DAEFF] to-[#4290DE] transition-[width] duration-150 ease-out"
                style={{ width: `${scrollPercent}%` }}
            />
        </div>
    );
};

export default ScrollProgressBar;