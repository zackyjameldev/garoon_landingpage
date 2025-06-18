/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        slideDown: 'slideDown 0.4s ease-out forwards',
        shimmer: 'shimmer 2s infinite linear',
        'spin-slow': 'spin 6s linear infinite',
        rotateBorder: 'rotateBorder 4s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        typing: 'typing 4s steps(30, end), blink .75s step-end infinite',
        blink: 'blink .75s step-end infinite',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-15%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '30ch' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        heading: ['InterVariable', 'sans-serif'],
        body: ['InterVariable', 'sans-serif'],
      },
      colors: {
        primary: '#0D4049',
        secondary: '#2EE7A3',
        tertiary: '#F8C200',
        info: '#2F80ED',
        success: '#27AE60',
        error: '#EB5757',
        black1: '#041518',
        black2: '#062024',
        white: '#FFFFFF',
        gray1: '#616161',
        gray2: '#ADADAD',
        gray3: '#828282',
        // Color shades (examples, add more as needed)
        green: {
          100: '#D0FAEB',
          200: '#B1F6DD',
          300: '#8AF2CC',
          400: '#63EEBB',
          500: '#3CE9AA',
          600: '#1EE599',
          700: '#12BF80',
          800: '#0E9966',
          900: '#08734D',
          950: '#042E1F',
        },
        yellow: {
          100: '#FEF3CC',
          200: '#FDE8AA',
          300: '#FCE180',
          400: '#FAD655',
          500: '#F9CC2A',
          600: '#F8C200',
          700: '#CFA200',
          800: '#A58100',
          900: '#7C6100',
          950: '#322700',
        },
        blue: {
          100: '#CFD9DB',
          200: '#AEBFC2',
          300: '#86A0A4',
          400: '#5E8086',
          500: '#356067',
          600: '#0D4049',
          700: '#0B353D',
          800: '#092B31',
          900: '#072025',
          950: '#03200F',
        },
      },
    },
  },
  plugins: [],
}; 