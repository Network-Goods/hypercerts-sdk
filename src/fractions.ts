import { execute, ClaimTokensByOwnerDocument } from "../.graphclient";

const fractionsByOwner = async (owner: string) => {
  return await execute(ClaimTokensByOwnerDocument, { owner });
};

export { fractionsByOwner };
