const config = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["./src/**"],
  coverageReporters: ["json-summary"],
  coverageThreshold: {
    global: {
      branches: 83.33,
      functions: 52.94,
      lines: 52.83,
      statements: 56.14,
    },
  },
};

module.exports = config;
