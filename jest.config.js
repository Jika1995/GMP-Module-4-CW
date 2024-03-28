module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  roots: ['./src'],
  silent: false,
  verbose: true,
  collectCoverageFrom: ['src/**'],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      lines: 98
    }
  }
  // roots: ['<rootDir>/src'],
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}