module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.(spec|test).ts'],
  transform: {
    '^.*ts$': ['@swc/jest'],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
