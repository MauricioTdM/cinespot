export default function MovieDetailsSkeleton() {
    return (
        <div className="min-h-screen text-white bg-secondary pt-5 animate-pulse">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="flex-shrink-0 w-[300px] h-[450px] bg-gray-700 rounded-2xl"></div>
                <div className="flex flex-col gap-4 max-w-3xl w-full">
                    <div className="flex flex-wrap gap-2">
                        <div className="h-6 w-24 bg-gray-700 rounded-full"></div>
                        <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="h-10 bg-gray-700 rounded w-full"></div>
                    <div className="flex items-center gap-4">
                        <div className="h-6 bg-gray-700 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                    </div>
                    <div className="flex gap-6">
                        <div className="h-5 bg-gray-700 rounded w-1/2"></div>
                        <div className="h-5 bg-gray-700 rounded w-1/3"></div>
                    </div>
                    <div className="h-12 w-48 bg-gray-700 rounded-xl mt-4"></div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
                <section>
                    <div className="h-8 w-32 bg-gray-700 rounded mb-3"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-700 rounded"></div>
                        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-700 rounded"></div>
                    </div>
                </section>

                <section className="grid sm:grid-cols-2 gap-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="h-24 bg-tertiary rounded-xl p-4">
                            <div className="h-4 w-1/3 bg-gray-600 rounded"></div>
                            <div className="h-5 w-2/3 bg-gray-600 rounded mt-2"></div>
                        </div>
                    ))}
                </section>
                <section>
                    <div className="h-8 w-48 bg-gray-700 rounded mb-4"></div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index}>
                                <div className="aspect-[2/3] bg-gray-700 rounded-lg"></div>
                                <div className="h-4 bg-gray-700 rounded mt-2 w-3/4"></div>
                                <div className="h-3 bg-gray-700 rounded mt-1 w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}