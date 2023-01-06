import { expect, assert } from "chai";
import { getMetadata, storeMetadata } from "../src";
import mockData from "./mockData.json";

import { HypercertMetadata } from "../types/metadata";

const mockMetadata: HypercertMetadata = mockData;
const mockMetadataCid = "bafkreigdm2flneb4khd7eixodagst5nrndptgezrjux7gohxcngjn67x6u";

describe("IPFS Client", () => {
  /**
   * Currently just testing against the production NFT.Storage service.
   */
  it("Smoke test - add", async () => {
    const result = await storeMetadata(mockMetadata);
    expect(result).to.be.a("string");
    expect(result).to.equal(mockMetadataCid);
  }).timeout(5000);

  it("Smoke test - get", async () => {
    const data = await getMetadata(mockMetadataCid);

    expect(data).to.deep.equal(mockMetadata);
  }).timeout(5000);
});
