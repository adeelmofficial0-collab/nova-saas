import { Mail, Phone } from "lucide-react";

const LinkedinIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
);

const SOCIAL_LINKS = [
    { icon: Mail, href: "mailto:hello@novasaas.com", label: "Email" },
    { icon: Phone, href: "tel:+923001234567", label: "Phone" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
];

const SocialLink = ({ icon: Icon, href, label }) => (
    <a
        href={href}
        aria-label={label}
        className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors duration-300"
    >
        <Icon size={16} aria-hidden="true" />
    </a>
);

const FooterNavLink = ({ label, href }) => (
    <a
        href={href}
        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
    >
        {label}
    </a>
);

const BrandWatermark = () => (
    <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[80px] sm:text-[140px] md:text-[180px] font-extrabold leading-none select-none whitespace-nowrap text-gray-900/5 dark:text-white/5"
    >
        NOVA
    </span>
);

const FooterDivider = () => (
    <div className="relative max-w-5xl mx-auto mt-10 sm:mt-14 px-4 sm:px-6">
        <div className="h-px w-full bg-gray-200 dark:bg-white/10" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-blue-500/30 bg-white dark:bg-[#09101D] flex items-center justify-center">
                <span className="text-blue-400 font-bold text-lg sm:text-xl">N</span>
            </div>
        </div>
    </div>
);

const Footer = () => {
    return (
        <footer className="relative bg-white dark:bg-[#09101D] overflow-hidden py-14 sm:py-20 transition-colors border-t border-gray-200 dark:border-white/10">
            <BrandWatermark />

            <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">NoVA</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">
                    Practical tools for teams that want to move faster.
                </p>

                <div className="flex items-center justify-center gap-4 mt-6">
                    {SOCIAL_LINKS.map((link) => (
                        <SocialLink key={link.label} {...link} />
                    ))}
                </div>

                <nav
                    aria-label="Footer navigation"
                    className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6"
                >
                    {NAV_LINKS.map((link) => (
                        <FooterNavLink key={link.label} {...link} />
                    ))}
                </nav>
            </div>

            <FooterDivider />
        </footer>
    );
};

export default Footer;