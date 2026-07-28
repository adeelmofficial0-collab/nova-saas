import { Zap, Shield, BarChart3, Users, Headphones, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized performance that keeps your workflow smooth and responsive.",
    },
    {
        icon: Shield,
        title: "Advanced Security",
        description: "Enterprise-grade encryption to keep your data safe and protected.",
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

const Features = () => {
    return (
        <motion.section
            id="features"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white dark:bg-[#0d1526] px-6 py-24 transition-colors"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Everything you need to{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        scale
                    </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4">
                    Powerful features designed to help modern teams move faster and work smarter.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.08,
                            y: -14,
                            rotate: -2,
                            transition: { type: "spring", stiffness: 90, damping: 20 },
                        }}
                        style={{ transformOrigin: "bottom center" }}
                        className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-left hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-2xl relative z-0 hover:z-10"
                    >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                            <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Features;
