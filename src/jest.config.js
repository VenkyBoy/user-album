module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["src/setupTests.js"],
    verbose: true,
};