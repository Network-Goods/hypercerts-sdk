import { expect, assert } from "chai";
import { getMetadata, storeMetadata } from "../src";

// Import MockIPFS and create a fake node:
import * as MockIPFS from "mockipfs";
import { HypercertMetadata } from "../types/metadata";
import { create } from "ipfs-http-client";

const adminServer = MockIPFS.getAdminServer();
adminServer.start().then(() => console.log("Admin server started"));
const mockNode = MockIPFS.getLocal();

const mockMetadata: HypercertMetadata = {
  name: "mock",
  description: "mock description",
  image: "image.jpg",
  properties: {
    impactScopes: "mock impact scope",
    workScopes: "mock work scope",
    impactTimeframe: [12345678, 87654321],
    workTimeframe: [87654321, 123456678],
    contributors: ["0x0", "vitalik"],
  },
};
const mockMetadataCid = "bafkreigdm2flneb4khd7eixodagst5nrndptgezrjux7gohxcngjn67x6u";

describe("IPFS Client", () => {
  // Start & stop your mock node to reset state between tests
  beforeEach(() => mockNode.start());
  afterEach(() => mockNode.stop());
  after(() => adminServer.stop());

  /**
   * Currently just testing against the production NFT.Storage service.
   * The service is smart enough to deduplicate uploads and return
   * the same CID for the same mock data, even if coming from different
   * NFT.storage API keys.
   */
  it("Smoke test - add", async () => {
    /**
    await mockNode.forAdd().thenAcceptPublish();
    await mockNode.forCat().thenReturn("Mock content");
    const mockClient = create(mockNode.ipfsOptions);
    */

    const result = await storeMetadata(mockMetadata);
    expect(result).to.be.a("string");
    expect(result).to.equal(mockMetadataCid);
  }).timeout(5000);

  it("Smoke test - get", async () => {
    /**
    await mockNode.forCat().thenReturn("Mock content");
    const mockClient = create(mockNode.ipfsOptions);
    */

    const data = await getMetadata(mockMetadataCid);

    let catResponse = "";
    for await (const item of data) {
      const raw = Buffer.from(item).toString("utf8");
      catResponse = raw + catResponse;
    }

    expect(catResponse).to.deep.equal(JSON.stringify(mockMetadata));
  }).timeout(5000);
});
