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
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
}