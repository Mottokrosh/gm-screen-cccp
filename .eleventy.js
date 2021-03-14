module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("img");

  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
