// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 370000,
      from: '0x00d457731112A41E90a99540778152C98b2D3BDD'
    }
  }
}
