const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  publicPath: "",
  transpileDependencies: [],
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    stats: { warnings: false },
    // Disable webpack persistent cache to avoid Cache.shutdown errors in CI
    cache: false,
    performance: { hints: false },
  },
  chainWebpack: (config) => {
    config.plugins.delete("friendly-errors");

    // Exclude apexcharts from babel-loader to avoid large file processing
    config.module
      .rule("js")
      .exclude.add(/node_modules[\/]apexcharts/)
      .end();

    // Ensure Terser runs without worker threads (fixes CI/container issues)
    config.optimization
      .minimizer("terser")
      .tap((args) => {
        if (args && args[0]) {
          args[0].parallel = false;
          args[0].terserOptions = args[0].terserOptions || {};
        }
        return args;
      });
  },
});
