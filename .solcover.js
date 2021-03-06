module.exports = {
  skipFiles: [
    'test',
    '@aragon/os',
    '@aragon/minime',
    '@1hive/contract-helpers-test',
  ],
  mocha: {
    grep: "@skip-on-coverage", // Find everything with this tag
    invert: true               // Run the grep's inverse set.
  }
}
