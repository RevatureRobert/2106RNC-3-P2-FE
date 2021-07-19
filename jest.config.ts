import { withEnzyme } from 'jest-expo-enzyme';
import { defaults } from 'jest-config';

module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    projects: [
        withEnzyme(require('jest-expo/ios/jest-preset')),
        withEnzyme(require('jest-expo/android/jest-preset')),
        withEnzyme(require('jest-expo/web/jest-preset'))
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "./src/**/*.{ts, tsx}",
        "!**/babel.config.js",
        "!**/jest.setup.js",
        "!**/coverage/**",
        "!**/node_modules/**"
    ],
    coverageDirectory: 'coverage',
    preset: "jest-expo-enzyme",
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    roots: [
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
}