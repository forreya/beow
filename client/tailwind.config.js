/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{html,js,tsx,ts}"],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ["ibm-vga", ...defaultTheme.fontFamily.sans],
			oldComputer: ["ibm-vga", "san-serif"],
			videoGame: ["dtk-bios", "san-serif"],
		},
		colors: {
			warmOrange: '#CA9156',
			mutedTeal: '#49656A',
			softCream: '#FAF2E8',
			lightBeige: '#C9BB9C',
			oliveBrown: '#847B5F',
		},
	},
	plugins: [],
};
