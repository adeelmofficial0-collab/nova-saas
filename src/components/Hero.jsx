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
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Grow with Nova
                </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6 relative z-10">
                The all-in-one platform for modern teams. Automate workflows,
                analyze data, and boost productivity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-10">
                <a
                    href="#pricing"
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:to-indigo-600 transition"
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
