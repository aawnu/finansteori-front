import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(236 100% 55% / <alpha-value>)',
					foreground: 'hsl(236 100% 92% / <alpha-value>)',
					100: 'hsl(236 100% 92% / <alpha-value>)',
					200: 'hsl(236 100% 80% / <alpha-value>)',
					300: 'hsl(236 100% 67% / <alpha-value>)',
					400: 'hsl(236 100% 55% / <alpha-value>)',
					500: 'hsl(236 100% 42% / <alpha-value>)',
					600: 'hsl(236 100% 30% / <alpha-value>)',
					700: 'hsl(236 100% 17% / <alpha-value>)',
					800: 'hsl(236 100% 5% / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},
				finansteori: {
					DEFAULT: 'hsl(236 100% 55% / <alpha-value>)',
					foreground: 'hsl(236 100% 92% / <alpha-value>)',
					100: 'hsl(236 100% 92% / <alpha-value>)',
					200: 'hsl(236 100% 80% / <alpha-value>)',
					300: 'hsl(236 100% 67% / <alpha-value>)',
					400: 'hsl(236 100% 55% / <alpha-value>)',
					500: 'hsl(236 100% 42% / <alpha-value>)',
					600: 'hsl(236 100% 30% / <alpha-value>)',
					700: 'hsl(236 100% 17% / <alpha-value>)',
					800: 'hsl(236 100% 5% / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				lora: ['Lora Variable', ...fontFamily.sans],
				publicsans: ['Public Sans Variable', ...fontFamily.sans]
			}
		}
	}
};

export default config;
