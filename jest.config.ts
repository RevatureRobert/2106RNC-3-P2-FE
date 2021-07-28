import { defaults } from 'jest-config';

module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    collectCoverage: true,
    collectCoverageFrom: [
        "./src/**/*.{ts, tsx}",
        "!**/babel.config.js",
        "!**/jest.setup.js",
        "!**/coverage/**",
        "!**/node_modules/**"
    ],
    coverageDirectory: 'coverage',
    preset: "jest-expo",
    roots: [
        "<rootDir>/src"
    ],
    // testMatch: [
    //   "**/__tests__/**/*.+(ts|tsx|js)",
    //   "**/?(*.)+(spec|test).+(ts|tsx|js)"
    // ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
}