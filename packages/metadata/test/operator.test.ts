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

describe("IPFS Client", () => {
  // Start & stop your mock node to reset state between tests
  beforeEach(() => mockNode.start());
  afterEach(() => mockNode.stop());
  after(() => adminServer.stop());

  it("Smoke test - add", async () => {
    await mockNode.forAdd().thenAcceptPublish();
    await mockNode.forCat().thenReturn("Mock content");
    const mockClient = create(mockNode.ipfsOptions);

    const result = await storeMetadata(mockMetadata, mockClient);
    expect(result.path).to.include("mockXipfsXcid");
    expect(result.cid.toString()).to.include("mockXipfsXcid");
  });

  it("Smoke test - get", async () => {
    await mockNode.forCat().thenReturn("Mock content");
    const mockClient = create(mockNode.ipfsOptions);

    const data = await getMetadata("bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi", mockClient);

    let catResponse = "";
    for await (const item of data) {
      const raw = Buffer.from(item).toString("utf8");
      catResponse = raw + catResponse;
    }

    expect(catResponse).to.be.eq("Mock content");
  });
});
