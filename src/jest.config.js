module.exports = {
  testEnvironment: "jsdom",
  verbose: true,
  transform: {
    "^.+\\.js$": ["babel-jest", { configFile: "./babel.config.js" }],
  },
  moduleFileExtensions: ["js", "json", "jsx"],
  roots: ["C:/Users/hp/Desktop/namaste-react/react/src"],
  testMatch: ["**/_tests_/**/*.test.js"],
  setupFilesAfterEnv: [
    "<C:/Users/hp/Desktop/namaste-react/react/src/setupTests.js",
  ],
};

// module.exports = {
//   testEnvironment: "jsdom",
//   verbose: true,
//   roots: ["C:/Users/hp/Desktop/namaste-react/react/src"],
// };
