import { execute, ClaimsByOwnerDocument, FirstClaimsQuery, FirstClaimsDocument } from "../.graphclient";

const claimsByOwner = async (owner: string) => {
  return await execute(ClaimsByOwnerDocument, { owner });
};

const firstClaims = async () => {
  return await execute(FirstClaimsDocument, {});
};

export { claimsByOwner, firstClaims };
