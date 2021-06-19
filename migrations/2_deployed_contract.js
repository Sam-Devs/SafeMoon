const Safemoon = artifacts.require('Safemoon.sol');

module.exports = function (deployer, network) {
  if(network === 'bscTestnet') {
    deployer.deploy(Safemoon, '0xdd5305e118eb253f752509c7e9c7a970cdda7aaa');
  } else {
    deployer.deploy(Safemoon, '0x130f747511d3581abc46654dd5f3d1b7910242d5');
  }
};