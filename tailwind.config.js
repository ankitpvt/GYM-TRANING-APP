// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}", // Scans your JSX files for class usage
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   };
  

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          glow: "glow 1.5s ease-in-out infinite",
          "fade-in-up": "fadeInUp 1s ease-out",
          float: "float 3s ease-in-out infinite",
          "bounce-slow": "bounceSlow 3s infinite",
        },
        keyframes: {
          glow: {
            "0%, 100%": { textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" },
            "50%": { textShadow: "0 0 40px rgba(255, 255, 255, 1)" },
          },
          fadeInUp: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
          bounceSlow: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-15px)" },
          },
        },
      },
    },
    plugins: [],
  };
  