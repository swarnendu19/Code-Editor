import { Toaster } from "react-hot-toast"

function Toast() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 4000,
                style: {
                    background: '#3D404A',
                    color: '#ffffff',
                    border: '1px solid rgba(57, 224, 121, 0.2)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                },
                success: {
                    style: {
                        background: 'rgba(57, 224, 121, 0.1)',
                        border: '1px solid rgba(57, 224, 121, 0.3)',
                        color: '#39E079',
                    },
                    iconTheme: {
                        primary: '#39E079',
                        secondary: '#212429',
                    },
                },
                error: {
                    style: {
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        color: '#ef4444',
                    },
                    iconTheme: {
                        primary: '#ef4444',
                        secondary: '#212429',
                    },
                },
                loading: {
                    style: {
                        background: 'rgba(57, 224, 121, 0.05)',
                        border: '1px solid rgba(57, 224, 121, 0.2)',
                        color: '#ffffff',
                    },
                    iconTheme: {
                        primary: '#39E079',
                        secondary: '#212429',
                    },
                },
            }}
        />
    )
}

export default Toast
