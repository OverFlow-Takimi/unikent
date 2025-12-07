const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: {
        theme: {
          extend: {
            colors: {
              primary: "#0070f3",
              secondary: "#f3f3f3",
              accent: "#ff6347",
            },
          },
        },
      },
    },
  },
};

export default config;
