const configs = require('@bluebase/code-standards/jest.config');

module.exports = Object.assign(configs, {
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  coveragePathIgnorePatterns: [
    '.*\\.d\\.ts', 
    '<rootDir>/node_modules/',
    '<rootDir>/src/components/MapView/',
  ],
});