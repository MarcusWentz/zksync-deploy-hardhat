//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.17;

contract Greeter {
    
    string public greeting;

    function setGreeting(string calldata _greeting) public { //calldata is immutable cheaper than memory. 
        greeting = _greeting;
    }
    
}
