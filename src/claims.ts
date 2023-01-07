import { execute, ClaimsByOwnerDocument, RecentClaimsDocument, ClaimByIdDocument } from "../.graphclient";

export const claimsByOwner = async (owner: string) => {
  return await execute(ClaimsByOwnerDocument, { owner });
};

export const claimById = async (id: string) => {
  return execute(ClaimByIdDocument, { id });
};

export const firstClaims = async (first: number) => {
  return await execute(RecentClaimsDocument, { first });
};
