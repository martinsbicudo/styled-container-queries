const config = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["./src/**"],
  coverageReporters: ["json-summary"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 6.25,
      lines: 7.84,
      statements: 7.4,
    },
  },
};

module.exports = config;
