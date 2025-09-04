export default function MovieCardSkeleton() {
    return (
        <div className="bg-quaternary rounded-2xl overflow-hidden animate-pulse">
            <div className="bg-gray-700 aspect-[2/3]"></div>

            <div className="p-4 space-y-3">
                <div className="h-5 bg-gray-700 rounded w-3/4"></div>

                <div className="flex justify-between items-center">
                    <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                </div>
                
                <div className="space-y-2 pt-2">
                    <div className="h-3 bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                </div>
            </div>
        </div>
    );
}