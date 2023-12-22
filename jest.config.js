/** @type {import('jest').Config} */

const config = {
    roots: ["./src", "./test"],
    setupFiles: ["<rootDir>/.jest/set-env-vars.ts"],
    collectCoverageFrom: ["./src/**/*.js"],
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    modulePaths: ["<rootDir>"],
};

module.exports = config;
