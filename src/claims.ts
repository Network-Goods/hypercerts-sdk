import { getBuiltGraphSDK } from "../.graphclient";

const sdk = getBuiltGraphSDK();

export const claimsByOwner = async (owner: string) => sdk.ClaimsByOwner({ owner });

export const claimById = async (id: string) => sdk.ClaimById({ id });

export const firstClaims = async (first: number) => sdk.RecentClaims({ first });
