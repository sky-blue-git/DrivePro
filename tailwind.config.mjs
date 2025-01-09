/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			cyber: {
				'50': '#faf5ff',
				'100': '#f3e8ff',
				'200': '#e9d5ff',
				'300': '#d8b4fe',
				'400': '#c084fc',
				'500': '#a855f7',
				'600': '#9333ea',
				'700': '#7c3aed',
				'800': '#6b21a8',
				'900': '#581c87',
				'950': '#3b0764'
			},
			neon: {
				'purple': '#a855f7',
				'pink': '#ec4899',
				'violet': '#8b5cf6',
				'blue': '#3b82f6',
				'cyan': '#06b6d4'
			},
			dark: {
				'purple': '#7c3aed',
				'pink': '#be185d',
				'violet': '#6d28d9',
				'purple-800': '#6b21a8',
				'purple-900': '#581c87'
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'pulse-glow': {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
  				},
  				'50%': {
  					boxShadow: '0 0 40px rgba(34, 197, 94, 0.6)'
  				}
  			},
  			'float': {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'scan': {
  				'0%': {
  					left: '-100%'
  				},
  				'100%': {
  					left: '100%'
  				}
  			},
  			'holographic': {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%'
  				}
  			},
  			'matrix-rain': {
  				'0%': {
  					transform: 'translateY(-100vh)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translateY(100vh)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
  			'float': 'float 3s ease-in-out infinite',
  			'scan': 'scan 2s linear infinite',
  			'holographic': 'holographic 3s ease infinite',
  			'matrix-rain': 'matrix-rain 10s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
