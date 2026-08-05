const inputClasses =
    "w-full bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 sm:py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-colors";

const FormField = ({ id, label, error, as = "input", ...inputProps }) => {
    const Field = as;

    return (
        <div>
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <Field
                id={id}
                name={id}
                className={as === "textarea" ? `${inputClasses} resize-none` : inputClasses}
                {...inputProps}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default FormField;