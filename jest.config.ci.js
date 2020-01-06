// https://jestjs.io/docs/en/configuration.html
const base = require('./jest.config');

module.exports = Object.assign({}, base, {
    collectCoverage: true,
    coverageReporters: ['text', 'lcov'],
});
