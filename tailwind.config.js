/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				1024: "1024px",
			},
			height: {
				100: "40rem",
			},
		},
	},
	plugins: [],
};
