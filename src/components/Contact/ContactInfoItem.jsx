const ContactInfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Icon size={18} className="text-blue-400" aria-hidden="true" />
        </div>
        <div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">{label}</p>
            <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">{value}</p>
        </div>
    </div>
);

export default ContactInfoItem;