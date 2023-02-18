/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            borderWidth: {
                primaryWidth: 1.5
            },
            colors: {
                primaryBg: "#101010",
                neonGreen: "#CFFC00",
            },
            fontFamily: {
                inter: ["Inter"],
                mammoth: ["Mammoth"],
            },
            backgroundImage: {
                primaryGradient: "linear-gradient(89.93deg, #05C9F9 1.59%, #E5F61B 98.42%);",
                primaryDarkGradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), linear-gradient(89.93deg, #05C9F9 1.59%, #E5F61B 98.42%);",
            },
        }
    },
    plugins: [],
}