import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const contentVariants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
};

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div
            className={`bg-gray-50 dark:bg-[#0B1220] border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-blue-500/40" : "border-gray-200 dark:border-white/5"
                }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
            >
                <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    {question}
                </span>
                <ChevronDown
                    size={18}
                    className={`shrink-0 text-blue-400 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    aria-hidden="true"
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={contentVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FaqItem;