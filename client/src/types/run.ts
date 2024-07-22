interface Language {
    language: string
    version: string
    aliases: string[]
}

interface RunContextType {
    setInput: (input: string) => void
    output: string
    isRunning: boolean
    supportedLanguages: Language[]
    selectedLanguage: Language
    setSelectedLanguage: (language: Language) => void
    runCode: () => void
}

export { Language, RunContextType }
