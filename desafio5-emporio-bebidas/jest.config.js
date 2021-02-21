module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.test.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/**/*.d.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
