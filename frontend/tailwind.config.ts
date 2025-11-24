import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define 'sans' as Jost, making it the default paragraph font
        sans: ["var(--font-jost)", "sans-serif"],
        // Define 'grotesk' for headings
        grotesk: ["Clash Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;