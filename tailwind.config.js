/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "423px",
			md: "768px",

			lg: "1024px",

			xl: "1280px",
			//
		},
		extend: {},
	},
	plugins: [require("tailwind-scrollbar")],
};

