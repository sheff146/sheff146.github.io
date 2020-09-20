module.exports = (config) => {
  // config.addPassthroughCopy('src/favicon.ico');
  config.addPassthroughCopy('src/styles');

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    templateFormats: ["liquid"]
  }
};
