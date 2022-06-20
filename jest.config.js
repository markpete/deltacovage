module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,ts}'],
    coverageDirectory: "code-coverage",
    changedSince: "main",
    coverageThreshold: {
      global: {
        lines: 90
      }
    }
};