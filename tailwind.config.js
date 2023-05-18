/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			backgroundImage: {
				hero: "url('/img/hanabi-01.png')",
			},
			fontFamily: {
				montserrat: ["Montserrat"],
			},
			colors: {
				primary: "#292929",
				secondaryDark: "#474747",
				secondaryBlue: "#657df7",
				secondaryYellow: "#ffe810",
				secondaryGray: "#eaeaea",
				backgroundColor: "#f5f6fb",
				backgroundFooter: "#06165b",
				text: "#ffffff",
			},
			screens: {
				"2xl": "1320px",
			},
		},
		plugins: [],
	},
};
