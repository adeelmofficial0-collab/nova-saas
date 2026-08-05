import { Check, Zap, Rocket, Crown } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        number: "01",
        icon: Zap,
        badge: "STARTER",
        name: "Basic",
        price: "$9",
        period: "/month",
        description: "Perfect for individuals getting started.",
        features: ["Up to 5 projects", "2GB storage", "Basic support", "Core features"],
        highlighted: false,
    },
    {
        number: "02",
        icon: Rocket,
        badge: "MOST POPULAR",
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "Best for growing teams and businesses.",
        features: ["Unlimited projects", "50GB storage", "Priority support", "Advanced analytics", "Team collaboration"],
        highlighted: true,
    },
    {
        number: "03",
        icon: Crown,
        badge: "ENTERPRISE",
        name: "Enterprise",
        price: "$99",
        period: "/month",
        description: "For large organizations with custom needs.",
        features: ["Unlimited everything", "Unlimited storage", "24/7 dedicated support", "Custom integrations", "Advanced security"],
        highlighted: false,
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const gridPatternStyle = {
    backgroundImage:
        "linear-gradient(to right, rgba(96,165,250,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.04) 1px, transparent 1px)",
    backgroundSize: "22px 22px",
};

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="relative bg-white dark:bg-[#09101D] py-10 sm:py-16 overflow-hidden transition-colors shadow-[0_-40px_60px_-30px_rgba(0,0,0,0.08)] dark:shadow-[0_-40px_60px_-30px_rgba(0,0,0,0.6)]"
        >
            <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Simple <span className="text-blue-400">transparent</span> pricing
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4">
                    Choose the plan that fits your needs, Upgrade or downgrade anytime.
                </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mt-12 md:mt-16 items-stretch px-4 sm:px-6">
                {plans.map((plan, index) => {
                    const Icon = plan.icon;
                    return (
                        <motion.div
                            key={plan.name}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={fadeInUp}
                            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                            style={gridPatternStyle}
                            className="relative h-full flex flex-col rounded-2xl p-5 sm:p-6 border transition-all duration-300 bg-gray-50 dark:bg-[#0B1220] border-gray-200 dark:border-white/5 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-medium tracking-wider text-blue-500 dark:text-blue-400/50">
                                    {plan.number}
                                </span>
                                <span className="text-xs font-semibold tracking-wide bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full">
                                    {plan.badge}
                                </span>
                            </div>

                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 mb-6">
                                <Icon size={24} className="text-blue-400" aria-hidden="true" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{plan.description}</p>

                            <div className="mt-4">
                                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                                <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                            </div>

                            <ul className="mt-4 space-y-2 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <Check size={16} className="text-blue-400 shrink-0" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`block text-center mt-6 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${plan.highlighted
                                        ? "bg-[#58A8FF] text-[#111827] border border-[#7FC0FF]/40 shadow-[0_0_25px_rgba(88,168,255,0.45)] hover:bg-[#66B3FF] hover:shadow-[0_0_35px_rgba(88,168,255,0.65)]"
                                        : "border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                                    }`}
                            >
                                Get Started
                            </a>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Pricing;