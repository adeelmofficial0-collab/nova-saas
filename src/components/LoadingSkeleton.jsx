const SkeletonBlock = ({ className }) => (
    <div className={`bg-gray-200 dark:bg-white/10 rounded-lg animate-pulse ${className}`} />
);

const LoadingSkeleton = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#09101D] px-6 py-10 flex flex-col items-center transition-colors">
            <SkeletonBlock className="w-40 h-10 rounded-2xl mb-16" />

            <SkeletonBlock className="w-3/4 max-w-2xl h-10 mb-4" />
            <SkeletonBlock className="w-1/2 max-w-md h-10 mb-6" />
            <SkeletonBlock className="w-2/3 max-w-xl h-4 mb-2" />
            <SkeletonBlock className="w-1/2 max-w-lg h-4 mb-8" />

            <div className="flex gap-4">
                <SkeletonBlock className="w-36 h-12" />
                <SkeletonBlock className="w-36 h-12" />
            </div>
        </div>
    );
};

export default LoadingSkeleton;