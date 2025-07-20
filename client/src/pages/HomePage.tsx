import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"
import Footer from "@/components/common/Footer"

function HomePage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-dark via-dark to-darkHover">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 h-60 w-60 rounded-full bg-primary/5 blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(57, 224, 121, 0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="relative z-10 flex min-h-screen flex-col">
                {/* Header */}
                <header className="flex items-center justify-between p-6 sm:p-8">
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-dark font-bold text-lg">C</span>
                        </div>
                        <span className="text-xl font-bold text-white">Code Sync</span>
                    </div>
                    <nav className="hidden sm:flex items-center space-x-6">
                        <a href="#features" className="text-gray-300 hover:text-primary transition-colors">Features</a>
                        <a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a>
                        <a href="https://github.com/swarnendu19" className="text-gray-300 hover:text-primary transition-colors">GitHub</a>
                    </nav>
                </header>

                {/* Main content */}
                <main className="flex-1 flex items-center justify-center px-6 sm:px-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left side - Hero content */}
                            <div className="text-center lg:text-left space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                                        ✨ Real-time Collaboration
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                        Code Together,
                                        <span className="text-primary block">Build Better</span>
                                    </h1>
                                    <p className="text-xl text-gray-300 max-w-2xl">
                                        Experience seamless real-time code collaboration with integrated chat,
                                        drawing tools, and instant synchronization. Perfect for pair programming
                                        and team development.
                                    </p>
                                </div>

                                {/* Features grid */}
                                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                                    <div className="flex items-center space-x-2 text-gray-300">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <span className="text-sm">Real-time sync</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-300">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <span className="text-sm">Multi-language</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-300">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <span className="text-sm">Integrated chat</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-300">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <span className="text-sm">Drawing tools</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Form and illustration */}
                            <div className="flex flex-col items-center space-y-8">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                                    <img
                                        src={illustration}
                                        alt="Code Sync Illustration"
                                        className="relative z-10 w-[280px] sm:w-[350px] lg:w-[400px] animate-up-down"
                                    />
                                </div>
                                <FormComponent />
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div >
    )
}

export default HomePage
