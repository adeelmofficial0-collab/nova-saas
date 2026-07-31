import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import ContactInfoItem from "./ContactInfoItem";

const contactDetails = [
    { icon: Mail, label: "Email", value: "adeelmofficial0@gmail.com", href: "mailto:adeelmofficial0@gmail.com" },
    { icon: Phone, label: "Phone", value: "+92 302 4564734", href: "tel:+923024564734" },
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: "https://maps.google.com/?q=Lahore,Pakistan" },
];

const emailRegex = /^\S+@\S+\.\S+$/;

const inputClasses =
    "w-full bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 sm:py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-colors";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }

        if (isSubmitted) {
            setIsSubmitted(false);
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="contact"
            className="relative bg-white dark:bg-[#09101D] py-10 sm:py-10 transition-colors"
        >
            <header className="relative max-w-3xl mx-auto text-center px-4 sm:px-6">
                <span className="inline-block text-xs sm:text-sm font-semibold text-blue-500 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
                    Contact
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Let's get in{" "}
                    <span className="block text-blue-500">touch</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg mt-4">
                    Have a question or want to work together? Send us a message.
                </p>
            </header>

            <div className="relative max-w-5xl mx-auto mt-10 md:mt-14 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div className="flex flex-col gap-6 sm:gap-8 justify-center">
                    {contactDetails.map((item) => (
                        <ContactInfoItem key={item.label} {...item} />
                    ))}
                </div>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputClasses} resize-none`}
                        />
                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg px-6 py-3 transition-colors duration-300"
                    >
                        Send Message
                        <Send size={16} aria-hidden="true" />
                    </button>

                    {isSubmitted && (
                        <p className="text-sm text-green-500 text-center mt-2">
                            Thank you! Your message has been sent successfully.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;