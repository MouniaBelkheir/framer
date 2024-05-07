/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    extend: {
      fontFamily: {
        'russo': ['Russo One', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'petit': ['Petit Formal Script', 'cursive'],
      },
    },
	},
	plugins: [],
};
