module.exports = { 
 testEnvironment: 'node',
 transform: {}, 
 testMatch: ['**/tests/**/*.test.js'], 
 collectCoverageFrom: [ 
 'src/**/*.js', 
 '!src/app.js', 
 '!**/node_modules/**' 
 ], 
 coverageDirectory: 'coverage', 
 coverageReporters: ['text', 'lcov', 'html'],  coverageThreshold: { 
 global: { 
 branches: 70, 
 functions: 70, 
 lines: 70, 
 statements: 70 
 } 
 }, 
 setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],  verbose: true 
}; 
