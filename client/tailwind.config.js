/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{html,js,tsx,ts}"],
	theme: {
		extend: {},
		colors: {
			warmOrange: '#CA9156',
			mutedTeal: '#49656A',
			softCream: '#FAF2E8',
			lightBeige: '#C9BB9C',
			oliveBrown: '#847B5F',
		},
		fontFamily: {
			sans: ['ibm-vga', ...defaultTheme.fontFamily.sans],
			oldComputer: ['ibm-vga', 'sans-serif'],
			videoGame: ['dtk-bios', 'sans-serif'],
		},
	},
	plugins: [],
};
