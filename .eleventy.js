const fs = require('fs');
const filesize = require('file-size');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('filesize', function(path) {
    let stat = fs.statSync(path);
    return stat ? filesize(stat.size).human() : '';
  });
};
