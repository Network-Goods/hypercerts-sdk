import { execute, ClaimsByOwnerDocument, RecentClaimsDocument } from "../.graphclient";

const claimsByOwner = async (owner: string) => {
  return await execute(ClaimsByOwnerDocument, { owner });
};

const firstClaims = async (first: number) => {
  return await execute(RecentClaimsDocument, { first });
};

export { claimsByOwner, firstClaims };
