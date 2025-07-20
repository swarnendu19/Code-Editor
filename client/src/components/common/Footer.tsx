function Footer() {
    return (
        <footer className="relative z-10 border-t border-gray-800/50 bg-dark/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                        <div className="h-6 w-6 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-dark font-bold text-sm">C</span>
                        </div>
                        <span className="text-white font-semibold">Code Sync</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        <span className="text-gray-400 text-sm">
                            Built with ❤️ by{" "}
                            <a
                                href="https://github.com/swarnendu19"
                                className="text-primary hover:text-primary/80 transition-colors font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Swarnendu
                            </a>
                        </span>

                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/swarnendu19"
                                className="text-gray-400 hover:text-primary transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800/30 text-center">
                    <p className="text-gray-500 text-xs">
                        © 2024 Code Sync. Open source collaborative code editor.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
