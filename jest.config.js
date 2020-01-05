// https://jestjs.io/docs/en/configuration.html

module.exports = {
    verbose: true,
    clearMocks: false,
    collectCoverage: true,
    reporters: ["default", "jest-junit"],
    coverageReporters: ['text', 'lcov'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules'],
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.test.json',
      },
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
        "\\.(scss|css|sass|less)$": "<rootDir>/test/__mocks__/object-mock.js",
    },
    testMatch: ['<rootDir>/**/__test__/**/.test.(js|jsx|ts|tsx)'],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
  } 
