module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");

  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
