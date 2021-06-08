
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['iYkcCLmtHH7h33fkhT9Xdj'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  