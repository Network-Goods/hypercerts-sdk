import { BigNumberish, ethers } from "ethers";
import { provider } from "./utils/provider";
import { HypercertMinter, HypercertMinterABI } from "@bitbeckers/hypercerts-protocol";
import { validateMetaData } from "./validator";
import { HypercertMetadata } from "../types/metadata";
import { storeMetadata } from "./operator";

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
    return hypercertMinter.mintClaim(totalUnits, cid.path);
  } else {
    console.log("Incorrect metadata");
  }
};
