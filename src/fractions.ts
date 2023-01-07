import { execute, ClaimTokensByOwnerDocument, ClaimTokensByClaimDocument } from "../.graphclient";

export const fractionsByOwner = async (owner: string) => {
  return await execute(ClaimTokensByOwnerDocument, { owner });
};

export const fractionsByClaim = async (claimId: string) => execute(ClaimTokensByClaimDocument, { claimId });
