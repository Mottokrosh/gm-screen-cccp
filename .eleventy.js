module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
