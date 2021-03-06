pragma solidity ^0.5.0;

import "../interfaces/InterestRateInterface.sol";

contract InterestRateImplV1 is InterestRateInterface {

    constructor() public {
    }

    function getInterestRate(uint dmmTokenId, uint totalSupply, uint activeSupply) external view returns (uint) {
        // 0.0625 or 6.25%
        return 62500000000000000;
    }

}
