import type { Config } from "tailwindcss";

// Tailwind v4 uses CSS-based configuration in src/styles.css.
// This file exists only to satisfy tooling that expects a config file.
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
