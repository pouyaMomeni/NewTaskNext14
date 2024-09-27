import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkest: '#0D1B2A',
        dark: '#1B263B',
        mid: '#415A77',
        light: '#778DA9',
        lighest: '#E0E1DD',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #E2E2E2, #C9D6FF)',
      },
    },
  },
  plugins: [],
};
export default config;
