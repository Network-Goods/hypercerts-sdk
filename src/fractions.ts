import { getBuiltGraphSDK } from "../.graphclient";

const sdk = getBuiltGraphSDK();

export const fractionsByOwner = async (owner: string) => sdk.ClaimTokensByOwner({ owner });

export const fractionsByClaim = async (claimId: string) => sdk.ClaimTokensByClaim({ claimId });
