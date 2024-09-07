require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    arbisepolia: {
      url: `https://sepolia-rollup.arbitrum.io/rpc`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: process.env.ARBSEPOLIA_API_KEY
    }
  }
};
