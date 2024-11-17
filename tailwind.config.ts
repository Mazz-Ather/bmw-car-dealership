import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },  screens:{ 
      '2xl':{max:'1535px'},

      xl:{max:'1279px'},
      lg:{max:'767px'},
      sm:{max:'639'},
      xs:{max:'479px'}
    }
  },
  plugins: [],
};
export default config;
