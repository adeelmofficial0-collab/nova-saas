import { motion } from "framer-motion";

const floatingBoxes = [
    { position: "top-10 left-10", size: "w-6 h-6", color: "border-purple-500/40", delay: 0 },
    { position: "top-16 right-14", size: "w-5 h-5", color: "border-blue-400/40", delay: 1 },
    { position: "bottom-16 left-16", size: "w-5 h-5", color: "border-cyan-400/40", delay: 1.5 },
    { position: "bottom-10 right-10", size: "w-6 h-6", color: "border-purple-400/40", delay: 2 },
];

const twinkleStars = [
    { position: "top-24 left-1/4", color: "bg-purple-400/60", delay: 0.5 },
    { position: "bottom-24 right-1/4", color: "bg-cyan-300/60", delay: 1.8 },
];

const glowOrbs = [
    {
        position: "left-1/2 top-0 -translate-x-1/2",
        size: "h-[700px] w-[700px]",
        color: "bg-purple-600/20",
        blur: "blur-[180px]",
        moveX: [0, 40, 0],
        moveY: [0, -30, 0],
        duration: 12,
    },
    {
        position: "right-0 top-40",
        size: "h-[500px] w-[500px]",
        color: "bg-blue-500/15",
        blur: "blur-[160px]",
        moveX: [0, -30, 0],
        moveY: [0, 40, 0],
        duration: 14,
    },
    {
        position: "left-0 bottom-0",
        size: "h-[450px] w-[450px]",
        color: "bg-cyan-500/10",
        blur: "blur-[150px]",
        moveX: [0, 30, 0],
        moveY: [0, -20, 0],
        duration: 16,
    },
];

const HeroBackground = () => {
    return (
        <>
            <div
                className="absolute inset-0 -z-30 hidden dark:block opacity-[0.5]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right,  rgba(139,92,246,0.35) 1px, transparent 1px), linear-gradient(to bottom,  rgba(139,92,246,0.35) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    // maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
                    // WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
                }}
            />

            <div className="absolute inset-0 -z-20 hidden dark:block">
                {glowOrbs.map((orb, index) => (
                    <motion.div
                        key={index}
                        animate={{ x: orb.moveX, y: orb.moveY }}
                        transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute rounded-full ${orb.position} ${orb.size} ${orb.color} ${orb.blur}`}
                    />
                ))}
            </div>

            {floatingBoxes.map((box, index) => (
                <div
                    key={index}
                    className={`floating-box absolute ${box.position} ${box.size} border-2 ${box.color} rounded-md hidden dark:md:block`}
                    style={{ animationDelay: `${box.delay}s` }}
                />
            ))}

            {twinkleStars.map((star, index) => (
                <div
                    key={index}
                    className={`twinkle-star absolute ${star.position} w-1.5 h-1.5 ${star.color} rounded-full hidden dark:lg:block`}
                    style={{ animationDelay: `${star.delay}s` }}
                />
            ))}
        </>
    );
};

export default HeroBackground;
