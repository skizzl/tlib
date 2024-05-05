module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // kind of just ignores css imports
    ".(css|less/scss)$": "identity-obj-proxy",
  },
};
