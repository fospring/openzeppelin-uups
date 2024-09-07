const { ethers, upgrades } = require("hardhat");

const PROXY = "0x4692b7CeB1738d4A9Cf5397185a978F572497e27";

async function main() {
 const UpgradableContractV2 = await ethers.getContractFactory("UpgradableContractV2");
 console.log("Upgrading UpgradableContractV2...");
 let result = await upgrades.upgradeProxy(PROXY, UpgradableContractV2);
 console.log("UpgradableContractV2 upgraded successfully addr: ", await result.getAddress());
}

main();