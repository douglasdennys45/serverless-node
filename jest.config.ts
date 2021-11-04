module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@main/(.+)': '<rootDir>/src/main/$1',
    '@adapters/(.+)': '<rootDir>/src/adapters/$1',
    '@entities/(.+)': '<rootDir>/src/entities/$1',
    '@usecases/(.+)': '<rootDir>/src/usecases/$1',
    '@drivers/(.+)': '<rootDir>/src/drivers/$1'
  },
  testMatch: [
    '**/*.spec.ts',
    '**/*.test.ts'
  ],
  preset: '@shelf/jest-dynamodb',
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true,
  setupFiles: ['dotenv/config']
}
