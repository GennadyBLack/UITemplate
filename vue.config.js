const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src"));
    config.resolve.alias.set("~", path.resolve(__dirname, "src"));
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/rdbxxx/",
  outputDir:
    process.env.NODE_ENV === "production"
      ? __dirname + "/lib"
      : __dirname + "/demo",
  css: {
    extract: false,
  },
};
