import { useState } from "react";
import FaqItem from "./FaqItem";

const faqData = [
    {
        question: "What is Nova and how does it work?",
        answer: "Nova is an all-in-one SaaS platform that helps teams collaborate, track growth, and ship faster. You sign up, connect your workspace, and start using the dashboard within minutes.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, every plan comes with a 14-day free trial. No credit card is required to get started.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Absolutely. You can cancel or downgrade your plan at any time from your account settings — no questions asked.",
    },
    {
        question: "Do you offer support for teams?",
        answer: "Yes, our team plans include priority support along with dedicated onboarding assistance for larger organizations.",
    },
    {
        question: "Is my data secure on Nova?",
        answer: "Security is a top priority. All data is encrypted in transit and at rest, and we follow industry-standard compliance practices.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section
            id="faq"
            className="relative bg-white dark:bg-[#09101D] py-10 sm:py-16 transition-colors overflow-hidden"
        >
            <div
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 sm:h-40
               bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(0,0,0,0.04),transparent_75%)]
               dark:bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(0,0,0,0.7),transparent_75%)]"
            />

            <header className="relative max-w-3xl mx-auto text-center px-4 sm:px-6">
                <span className="inline-block text-xs sm:text-sm font-semibold text-blue-500 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
                    FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Frequently asked{" "}
                    <span className="block text-blue-500">questions</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg mt-4">
                    Everything you need to know before getting started.
                </p>
            </header>

            <div className="relative max-w-3xl mx-auto mt-10 md:mt-14 px-4 sm:px-6 flex flex-col gap-3 sm:gap-4">
                {faqData.map((item, index) => (
                    <FaqItem
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Faq;