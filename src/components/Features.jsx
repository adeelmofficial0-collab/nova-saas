import { Zap, Shield, BarChart3, Users, Headphones, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

const trustPoints = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized performance that keeps your workflow smooth and responsive.",
    },
    {
        icon: Shield,
        title: "Advanced Security",
        description: "Enterprise grade encryption to keep your data safe and protected.",
    },
    {
        icon: BarChart3,
        title: "Real-time Analytics",
        description: "Track performance and make data-driven decisions instantly.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Work together seamlessly with your team, anywhere, anytime.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Our dedicated team is always here to help you succeed.",
    },
    {
        icon: Puzzle,
        title: "Easy Integrations",
        description: "Connect with your favorite tools in just a few clicks.",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const cardClasses =
    "relative bg-gray-50 dark:bg-[#0B1220] border border-gray-200 dark:border-white/5 rounded-xl p-6 text-left hover:border-blue-500/30 transition-colors duration-300";

const Features = () => {
    return (
        <motion.section
            id="features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative bg-white dark:bg-[#09101D] px-4 sm:px-6 py-16 md:py-24 transition-colors overflow-hidden"
        >
            <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-[4rem] sm:text-[8rem] md:text-[12rem] font-black tracking-[0.2em] sm:tracking-[0.3em] text-blue-500/[0.06] whitespace-nowrap"
            >
                TRUSTED
            </span>

            <div className="relative max-w-6xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Everything you need to{" "}
                    <span className="block text-blue-500">scale</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4">
                    Powerful features designed to help modern teams move faster and work smarter.
                </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 md:mt-16">
                {trustPoints.map(({ icon: Icon, title, description }, index) => (
                    <motion.div
                        key={title}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                        className={cardClasses}
                    >
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                            <Icon size={20} className="text-blue-400" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Features;