const { resolve } = require("path");
const resolveToStaticPath = (relativePath) => resolve(__dirname, relativePath);

module.exports = {
  // ...
  webpack: {
    alias: {
      "@": resolveToStaticPath("./src"),
    },
  },
};
