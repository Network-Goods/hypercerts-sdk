import { BigNumberish, ethers } from "ethers";
import { provider } from "./utils/provider.js";
import { HypercertMinter, HypercertMinterABI } from "@network-goods/hypercerts-protocol";
import { validateMetaData } from "./validator/index.js";
import { HypercertMetadata } from "../types/metadata.mjs";
import { storeMetadata } from "./operator/index.js";

// TODO dynamic addresses and provider
const hypercertMinter = <HypercertMinter>(
  new ethers.Contract("0xcC08266250930E98256182734913Bf1B36102072", HypercertMinterABI, provider)
);

// TODO error handling
export const mintHypercertToken = async (claimData: HypercertMetadata, totalUnits: BigNumberish) => {
  if (validateMetaData(claimData)) {
    // store metadata on IPFS
    const cid = await storeMetadata(claimData);

    // mint hypercert token
    return hypercertMinter.mintClaim(totalUnits, cid);
  } else {
    console.log("Incorrect metadata");
  }
};
