module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				shark: {
					'50': '#f4f4f4',
					'100': '#e9e9e9',
					'200': '#c8c8c8',
					'300': '#a7a6a6',
					'400': '#646464',
					'500': '#222121',
					'600': '#1f1e1e',
					'700': '#1a1919',
					'800': '#141414',
					'900': '#111010'
				},
				bridal: {
					'50': '#fffffe',
					'100': '#fffefe',
					'200': '#fffefb',
					'300': '#fffdf9',
					'400': '#fffbf5',
					'500': '#fff9f0',
					'600': '#e6e0d8',
					'700': '#bfbbb4',
					'800': '#999590',
					'900': '#7d7a76'
				}
			},
			fontSize: {
				xxxs: '.5rem',
				xxs: '.625rem'
			}
		},
		fill: {
			current: 'currentColor'
		},
		fontFamily: {
			pacifico: ['Pacifico', 'sans-serif'],
			merriweather: ['Merriweather', 'serif'],
			montserrat: ['Montserrat', 'sans-serif']
		}
	},
	variants: {
		extend: {},
		variants: {
			fill: ['hover', 'focus']
		}
	},
	plugins: []
};
