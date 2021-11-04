module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@core/(.+)': '<rootDir>/src/core/$1',
    '@interfaces/(.+)': '<rootDir>/src/interfaces/$1',
    '@entities/(.+)': '<rootDir>/src/domain/entities/$1',
    '@usecases/(.+)': '<rootDir>/src/domain/usecases/$1',
    '@frameworks/(.+)': '<rootDir>/src/frameworks/$1'
  },
  testMatch: [
    '**/*.spec.ts',
    '**/*.test.ts'
  ],
  // preset: '@shelf/jest-dynamodb',
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true
}
