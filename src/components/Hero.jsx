import { Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-white dark:bg-[#0a0a0f] px-6 py-24 text-center transition-colors overflow-hidden"
        >
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-30 -z-10" />

            <div className="inline-flex items-center gap-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <Sparkles size={14} />
                NovaAI 2.0 is here!
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Build Faster. Scale Smarter. <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Grow with NovaAI.
                </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6">
                The all-in-one AI platform for modern teams. Automate workflows,
                analyze data, and boost productivity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <a
                    href="#pricing"
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                    Get Started Free
                </a>

                <a
                    href="#demo"
                    className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    Watch Demo
                </a>
            </div>
        </section>
    );
};

export default Hero;