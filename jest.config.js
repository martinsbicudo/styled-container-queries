const config = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["./src/**"],
  coverageReporters: ["json-summary", "html"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 82.35,
      lines: 80.39,
      statements: 81.81,
    },
  },
};

module.exports = config;
