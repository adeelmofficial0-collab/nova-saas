import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!isVisible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-[#58A8FF] text-[#111827] border border-[#7FC0FF]/40 shadow-[0_0_20px_rgba(88,168,255,0.45)] hover:bg-[#66B3FF] hover:shadow-[0_0_30px_rgba(88,168,255,0.6)] transition-all duration-300"
        >
            <ArrowUp size={20} aria-hidden="true" />
        </button>
    );
};

export default BackToTop;