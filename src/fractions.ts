import { execute, FractionsByOwnerDocument } from "../.graphclient";

const fractionsByOwner = async (owner: string) => {
  return await execute(FractionsByOwnerDocument, { owner });
};

export { fractionsByOwner };
