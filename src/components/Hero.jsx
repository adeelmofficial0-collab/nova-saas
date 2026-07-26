const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-white dark:bg-[#09101D] px-6 py-24 text-center transition-colors overflow-hidden"
        >
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-[#09101D]" />

                <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full
    bg-purple-600/20 blur-[180px]" />

                <div className="absolute right-0 top-40 h-[500px] w-[500px]
    bg-blue-500/15 blur-[160px]" />

                <div className="absolute left-0 bottom-0 h-[450px] w-[450px]
    bg-cyan-500/10 blur-[150px]" />
            </div>
            <div className="floating-box absolute top-8 left-8 w-8 h-8 border-[2.5px] border-purple-500 text-purple-500 rounded-md" />
            <div className="floating-box absolute top-20 left-1/4 w-4 h-4 border-2 border-blue-400 text-blue-400 rounded-md" style={{ animationDelay: "1s" }} />
            <div className="floating-box absolute top-14 right-14 w-5 h-5 border-2 border-blue-500 text-blue-500 rounded-md" style={{ animationDelay: "2s" }} />
            <div className="floating-box absolute top-36 right-1/3 w-4 h-4 border-2 border-cyan-400 text-cyan-400 rounded-md" style={{ animationDelay: "0.5s" }} />
            <div className="floating-box absolute bottom-16 left-14 w-6 h-6 border-2 border-purple-500 text-purple-500 rounded-md" style={{ animationDelay: "1.5s" }} />
            <div className="floating-box absolute bottom-8 right-16 w-5 h-5 border-2 border-blue-400 text-blue-400 rounded-md" style={{ animationDelay: "2.5s" }} />
            <div className="floating-box absolute bottom-28 left-1/3 w-5 h-5 border-2 border-cyan-400 text-cyan-400 rounded-md" style={{ animationDelay: "1s" }} />
            <div className="floating-box absolute top-1/3 right-8 w-4 h-4 border-2 border-purple-400 text-purple-400 rounded-md" style={{ animationDelay: "3s" }} />
            <div className="floating-box absolute top-1/2 left-6 w-3 h-3 border-2 border-blue-500 text-blue-500 rounded-md" style={{ animationDelay: "1.8s" }} />
            <div className="floating-box absolute top-6 left-1/3 w-3 h-3 border-2 border-purple-400 text-purple-400 rounded-md" style={{ animationDelay: "2.2s" }} />
            <div className="floating-box absolute bottom-40 right-1/4 w-4 h-4 border-2 border-cyan-400 text-cyan-400 rounded-md" style={{ animationDelay: "0.8s" }} />
            <div className="floating-box absolute top-1/4 right-1/4 w-3 h-3 border-2 border-blue-400 text-blue-400 rounded-md" style={{ animationDelay: "1.3s" }} />
            <div className="floating-box absolute bottom-1/4 left-1/2 w-4 h-4 border-2 border-purple-500 text-purple-500 rounded-md" style={{ animationDelay: "2.7s" }} />
            <div className="floating-box absolute top-10 right-1/2 w-3 h-3 border-2 border-cyan-400 text-cyan-400 rounded-md" style={{ animationDelay: "0.3s" }} />
            <div className="floating-box absolute bottom-12 left-1/4 w-4 h-4 border-2 border-blue-500 text-blue-500 rounded-md" style={{ animationDelay: "1.6s" }} />
            <div className="floating-box absolute top-1/2 right-16 w-3 h-3 border-2 border-purple-400 text-purple-400 rounded-md" style={{ animationDelay: "0.9s" }} />
            <div className="floating-box absolute bottom-1/2 left-20 w-5 h-5 border-2 border-cyan-400 text-cyan-400 rounded-md" style={{ animationDelay: "2.1s" }} />

            <div className="light-trail absolute top-0 left-1/5 w-px h-32 bg-gradient-to-b from-purple-400 to-transparent" style={{ animationDelay: "0.5s" }} />
            <div className="light-trail absolute top-10 right-1/5 w-px h-24 bg-gradient-to-b from-blue-400 to-transparent" style={{ animationDelay: "1.5s" }} />
            <div className="light-trail absolute bottom-0 left-2/3 w-px h-28 bg-gradient-to-t from-cyan-400 to-transparent" style={{ animationDelay: "2s" }} />
            <div className="light-trail absolute bottom-10 right-1/3 w-px h-20 bg-gradient-to-t from-purple-400 to-transparent" style={{ animationDelay: "1s" }} />

            <div className="twinkle-star absolute top-28 left-1/3 w-1.5 h-1.5 bg-purple-400 text-purple-400 rounded-full" />
            <div className="twinkle-star absolute top-1/2 left-16 w-1.5 h-1.5 bg-blue-400 text-blue-400 rounded-full" style={{ animationDelay: "1s" }} />
            <div className="twinkle-star absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-cyan-300 text-cyan-300 rounded-full" style={{ animationDelay: "2s" }} />
            <div className="twinkle-star absolute top-16 right-1/3 w-1.5 h-1.5 bg-blue-300 text-blue-300 rounded-full" style={{ animationDelay: "0.5s" }} />
            <div className="twinkle-star absolute bottom-36 left-1/4 w-1.5 h-1.5 bg-purple-400 text-purple-400 rounded-full" style={{ animationDelay: "1.5s" }} />
            <div className="twinkle-star absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-cyan-300 text-cyan-300 rounded-full" style={{ animationDelay: "2.3s" }} />
            <div className="twinkle-star absolute bottom-1/3 right-16 w-1.5 h-1.5 bg-purple-300 text-purple-300 rounded-full" style={{ animationDelay: "0.7s" }} />
            <div className="twinkle-star absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-blue-400 text-blue-400 rounded-full" style={{ animationDelay: "1.9s" }} />
            <div className="twinkle-star absolute top-8 left-1/2 w-1 h-1 bg-white text-white rounded-full" style={{ animationDelay: "0.2s" }} />
            <div className="twinkle-star absolute top-1/4 left-8 w-1 h-1 bg-cyan-200 text-cyan-200 rounded-full" style={{ animationDelay: "1.2s" }} />
            <div className="twinkle-star absolute bottom-16 left-1/2 w-1 h-1 bg-white text-white rounded-full" style={{ animationDelay: "2.6s" }} />
            <div className="twinkle-star absolute top-1/2 right-8 w-1 h-1 bg-purple-200 text-purple-200 rounded-full" style={{ animationDelay: "0.4s" }} />
            <div className="twinkle-star absolute bottom-8 left-1/5 w-1 h-1 bg-blue-200 text-blue-200 rounded-full" style={{ animationDelay: "1.7s" }} />
            <div className="twinkle-star absolute top-40 right-1/5 w-1 h-1 bg-white text-white rounded-full" style={{ animationDelay: "2.9s" }} />

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Build Faster Scale Smarter <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Grow with Nova
                </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6">
                The all-in-one platform for modern teams. Automate workflows,
                analyze data, and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
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