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
    expect(validateMetaData(exampleMetaData)).to.be.true;
    expect(validateMetaData({} as HypercertMetadata)).to.be.false;
  });

  it("checking default claimdata", () => {
    expect(validateClaimData(exampleClaimData)).to.be.true;
    expect(validateClaimData({} as HypercertClaimdata)).to.be.false;
  });
});
