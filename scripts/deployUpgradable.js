const { ethers, upgrades } = require("hardhat");

async function main() {
    const UpgradableContract = await ethers.getContractFactory('UpgradableContract');
    let result = await upgrades.deployProxy(UpgradableContract, { kind: 'uups' });
    console.log("UpgradableContract deploy successfully addr: ", await result.getAddress());
}
   
main();