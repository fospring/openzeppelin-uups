// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract UpgradableContract is 
                            UUPSUpgradeable,
                            OwnableUpgradeable 
                            {

    uint public number;

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}


    // The initialize function will be used to set up the initial state of the contract.
    function initialize() public initializer {
        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
        number = 10;
    }


     function updateNumber(uint _number) public {
        number = _number;
    }
    
}