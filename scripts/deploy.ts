import { ethers } from "hardhat";

async function main() {
  const nft = await ethers.deployContract("MyNFT", []);
  // 0x760F769980B20feDbc1Dd7Ef07143d43762e6847 - NFT Contract Address

  await nft.waitForDeployment();

  console.log(
    `DummyNFT deployed to ${nft.target}`
  );

  const [signer] = await ethers.getSigners();
  // Set the baseTokenURI
  const METADATA_URI = "ipfs://QmPtCpZ6XbqRx92L2kaSXtne1VUH1v7zKNKTUFFG5y52eN";
  await nft.setBaseTokenURI(METADATA_URI);
  await nft.mintTo(signer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
