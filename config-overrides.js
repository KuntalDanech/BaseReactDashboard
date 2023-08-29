const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@assets": "src/assets",
    "@components": "src/component",
    "@utils": "src/utils",
    "@views": "src/views",
  })(config);

  return config;
};
