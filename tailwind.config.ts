import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        belakang: "#faf5ee",
        element: "#1d503a",
        element2: "#fef1e1",
      },
    },
  },
  plugins: [],
};

export default config;
