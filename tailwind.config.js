/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"pink-secondary": "#E53761",
				"gray-borders": "#DAE3F8",
				"font-primary": "#0B1C33",
				"blue-primary": "#3788E5",
				"white-primary": "#FEFEFE",
				"gray-bg": "#F2F5FA",
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
};
