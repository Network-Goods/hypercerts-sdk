import { expect } from "chai";
import { validateClaimData, validateMetaData } from "../src/validator/index.js";
import { HypercertMetadata } from "../src/types/metadata.js";
import { HypercertClaimdata } from "../src/types/claimdata.js";

const exampleMetaData: HypercertMetadata = {
  name: "test",
  image: "test",
  description: "",
  properties: {
    impactScopes: "test",
    workScopes: "test",
    workTimeframe: [],
    impactTimeframe: [],
    contributors: ["alice", "bob"],
  },
};

const exampleClaimData: HypercertClaimdata = {
  impactScopes: "test",
  workScopes: "test",
  workTimeframe: [],
  impactTimeframe: [],
  contributors: ["alice", "bob"],
};

describe("Validate claim test", () => {
  it("checking default metadata", () => {
    expect(validateMetaData(exampleMetaData).valid).to.be.true;
    expect(validateMetaData({} as HypercertMetadata).valid).to.be.false;
  });

  it("checking default claimdata", () => {
    expect(validateClaimData(exampleClaimData).valid).to.be.true;
    expect(validateClaimData({} as HypercertClaimdata).valid).to.be.false;
  });
});
