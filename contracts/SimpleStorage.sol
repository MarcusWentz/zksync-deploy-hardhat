// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract SimpleStorage {
    uint public storedData; //Do not set 0 manually it wastes gas!

    event setEvent();

    function set(uint256 x) public {
        storedData = x;
        emit setEvent();
    }

}