import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import LoadingSkeleton from "./components/LoadingSkeleton";
import BackToTop from "./components/BackToTop";
const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingSkeleton />;
    }

    return (
        <div className="bg-white dark:bg-[#080E1A] min-h-screen">
            <ScrollProgressBar />
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <Faq />
            <ContactForm />
            <Footer />
            <BackToTop />
        </div>
    );
};

export default App;