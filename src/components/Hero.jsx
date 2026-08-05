import HeroBackground from "./HeroBackground";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-white dark:bg-[#09101D] px-6 py-24 text-center transition-colors overflow-hidden"
        >
            <HeroBackground />

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight relative z-10">
                Build Faster Scale Smarter <br />
                <span className="text-blue-400">Grow with Nova</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6 relative z-10">
                The all-in-one platform for modern teams. Automate workflows,
                analyze data, and boost productivity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-10">
                <a
                    href="#pricing"
                    className="bg-gradient-to-b from-[#5DAEFF] to-[#4290DE] text-[#111827] font-medium px-6 py-3 rounded-xl border border-blue-300/20 shadow-[0_0_18px_rgba(66,144,222,0.35)] hover:shadow-[0_0_28px_rgba(66,144,222,0.5)] hover:from-[#6AB6FF] hover:to-[#4A9BFF] transition-all duration-300"
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