interface ChatMessageProps {
    id: string
    message: string
    username: string
    timestamp: string
}

interface ChatContextProps {
    messages: ChatMessageProps[]
    setMessages: (
        messages: ChatMessageProps[] | ((messages: ChatMessageProps[]) => ChatMessageProps[]),
    ) => void
    isNewMessage: boolean
    setIsNewMessage: (isNewMessage: boolean) => void
    lastScrollHeight: number
    setLastScrollHeight: (lastScrollHeight: number) => void
}

export { ChatContextProps, ChatMessageProps }
