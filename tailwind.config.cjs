const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: "class",
	theme: {
		screens: {
			'sm': '1000px',
			'md': '1200px',
			'lg': '1500px',
			'xl': '1800px',
			'2xl': '2000px',
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
