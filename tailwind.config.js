/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryBg: "#101010",
            },
            fontFamily: {
                inter: ["Inter"],
                mammoth: ["Mammoth"],
            },
            backgroundImage: {
                primaryGradient: "linear-gradient(89.93deg, #05C9F9 1.59%, #E5F61B 98.42%);",
            },
        }
    },
    plugins: [],
}