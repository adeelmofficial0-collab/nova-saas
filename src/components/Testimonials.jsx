import { Star, Users, TrendingUp, Repeat, Briefcase, Rocket, Award, Heart } from "lucide-react";
import "../styles/Testimonials.css";

const testimonials = [
    {
        name: "Adeel Malik",
        role: "Product Manager, Nimbus",
        quote: "This platform completely changed how our team collaborates. We shipped features twice as fast.",
        rating: 5,
        icon: Rocket,
    },
    {
        name: "Zehan Khan",
        role: "CTO, Brightloop",
        quote: "The analytics dashboard alone paid for itself. We finally have real visibility into growth.",
        rating: 5,
        icon: TrendingUp,
    },
    {
        name: "Umais Waseem",
        role: "Founder, Studio Wave",
        quote: "Support has been outstanding — every question answered within minutes.",
        rating: 5,
        icon: Heart,
    },
    {
        name: "Michael Reyes",
        role: "Engineering Lead, Pivotal",
        quote: "Integration took less than a day. The documentation is the clearest I've worked with.",
        rating: 5,
        icon: Briefcase,
    },
    {
        name: "Lena Osei",
        role: "Operations Director, Fieldstack",
        quote: "We evaluated four other tools before this one. Nothing else came close on ease of use.",
        rating: 5,
        icon: Award,
    },
];

const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Star, value: "4.9★", label: "Average Rating" },
    { icon: Repeat, value: "98%", label: "Client Retention" },
    { icon: TrendingUp, value: "3x", label: "Faster Onboarding" },
];

const marqueeItems = [...testimonials, ...testimonials];

const CARD_BASE =
    "bg-gray-50 dark:bg-[#0B1220] border border-gray-200 dark:border-white/5 " +
    "rounded-xl p-5 sm:p-6 text-left hover:border-blue-500/30 transition-all duration-300";

const ICON_WRAPPER =
    "w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 " +
    "flex items-center justify-center mb-5";

const RatingStars = ({ rating }) => (
    <div className="flex items-center gap-1 mb-3" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={14} className="text-blue-400 fill-blue-400" aria-hidden="true" />
        ))}
    </div>
);

const TestimonialCard = ({ name, role, quote, rating, icon: Icon }) => (
    <article
        className={`group shrink-0 w-[280px] sm:w-[340px] h-[280px] sm:h-[300px] flex flex-col hover:scale-[1.03] ${CARD_BASE}`}
    >
        <div className={ICON_WRAPPER}>
            <Icon size={20} className="text-blue-400" aria-hidden="true" />
        </div>

        <RatingStars rating={rating} />

        <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {quote}
        </blockquote>

        <footer className="mt-auto">
            <div className="h-px w-full bg-blue-500/20 mb-4 overflow-hidden">
                <div className="h-full w-full bg-blue-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            </div>

            <cite className="block text-sm font-semibold text-gray-900 dark:text-white not-italic">
                {name}
            </cite>

            <p className="text-xs text-gray-500 dark:text-gray-500">{role}</p>
        </footer>
    </article>
);

const StatCard = ({ icon: Icon, value, label }) => (
    <div className={CARD_BASE}>
        <div className={ICON_WRAPPER}>
            <Icon size={20} className="text-blue-400" aria-hidden="true" />
        </div>
        <p className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-1">{value}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{label}</p>
        <div className="h-px w-full bg-blue-500/20" />
    </div>
);

const SectionHeader = () => (
    <header className="relative max-w-6xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Loved by teams <span className="block text-blue-400">around the world</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4">
            Don't just take our word for it here's what our customers have to say.
        </p>
    </header>
);

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="relative bg-white dark:bg-[#09101D] py-10 sm:py-16 overflow-hidden transition-colors
                       shadow-[0_-40px_60px_-30px_rgba(0,0,0,0.08)] dark:shadow-[0_-40px_60px_-30px_rgba(0,0,0,0.6)]"
        >
            <SectionHeader />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mt-12 md:mt-14 px-4 sm:px-6">
                {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                ))}
            </div>

            <div className="relative mt-12 md:mt-16">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white dark:from-[#09101D] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white dark:from-[#09101D] to-transparent z-10" />

                <div className="marquee-track flex gap-4 sm:gap-6 w-max">
                    {marqueeItems.map((testimonial, index) => (
                        <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;