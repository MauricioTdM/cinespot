import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-tertiary">
            <Navbar />
            <main>
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}