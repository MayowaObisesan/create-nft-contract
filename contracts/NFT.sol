// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    string public baseTokenURI;

    constructor() ERC721("DummyNFT", "NFT") {
        baseTokenURI = "";
    }

    function mintTo(address recipient) external onlyOwner returns (uint256) {
        require(recipient != address(0), "Cannot mint to address zero");
        _safeMint(recipient, 1);
        return 1;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseTokenURI(string memory _baseTokenURI) public {
        baseTokenURI = _baseTokenURI;
    }
}
