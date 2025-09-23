export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"], // custom font
      },
      fontSize: {
        h1: ["44px", { lineHeight: "auto" }],
        h2: ["38px", { lineHeight: "auto" }],
        h3: ["32px", { lineHeight: "auto" }],
        h4: ["26px", { lineHeight: "auto" }],
        p: ["22px", { lineHeight: "auto" }],
        nav: ["16px", { lineHeight: "auto" }],
        mh1: ["28px", { lineHeight: "auto" }],
        mh2: ["22px", { lineHeight: "auto" }],
        mh3: ["16px", { lineHeight: "auto" }],
        mh4: ["14px", { lineHeight: "auto" }],
        mh4xs: ["10px", { lineHeight: "auto" }],
      },
    },
  },
  plugins: [],
};
