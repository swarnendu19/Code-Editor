/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                dark: "#212429",
                darkHover: "#3D404A",
                light: "#f5f5f5",
                primary: "#39E079",
                danger: "#ef4444",
                "primary-dark": "#2dd865",
                "primary-light": "#4ade80",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                "space-grotesk": ["Space Grotesk", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
                "float": "float 3s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "gradient-shift": "gradient-shift 3s ease infinite",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(57, 224, 121, 0.3)',
                'glow-lg': '0 0 40px rgba(57, 224, 121, 0.4)',
            },
        },
    },
}

