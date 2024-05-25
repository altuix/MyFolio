export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'hover-hover': { 'raw': '(hover: hover)' },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        primary: '#27272a',
        secondary: '#65656d',
        'tertiary-color': '#acacb4',
        'quaternary-color': '#e4e4e7',
        'link-color': '#14b8a6',
      },
      fontFamily: {
        primary: ['Heebo', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}
