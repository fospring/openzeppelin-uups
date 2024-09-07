const { ethers, upgrades } = require("hardhat");

async function main() {
    const MyTokenV1 = await ethers.getContractFactory('MyTokenV1');
    let result = await MyTokenV1.deploy();
    console.log("MyTokenV1 deploy successfully addr: ", await result.getAddress());
}
   
main();