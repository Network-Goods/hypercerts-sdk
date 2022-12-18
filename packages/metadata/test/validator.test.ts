import { expect } from "chai";
import { claimdataValidator, metadataValidator } from "../src/validator";
import { HypercertMetadata } from "../types/metadata";
import { HypercertClaimdata } from "../types/claimdata";

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
    expect(metadataValidator(exampleMetaData)).to.be.true;
    expect(metadataValidator({} as HypercertMetadata)).to.be.false;
  });

  it("checking default claimdata", () => {
    expect(claimdataValidator(exampleClaimData)).to.be.true;
    expect(claimdataValidator({} as HypercertClaimdata)).to.be.false;
  });
});
