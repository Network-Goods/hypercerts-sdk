import { expect, assert } from "chai";
import { getMetadata, storeMetadata } from "../src/";

// Import MockIPFS and create a fake node:
import * as MockIPFS from "mockipfs";
import { HypercertMetadata } from "../types/metadata";
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

describe("Check connection", () => {
  // Start & stop your mock node to reset state between tests
  beforeEach(() => mockNode.start());
  afterEach(() => mockNode.stop());

  it.skip("checking if client stores simple data", async () => {
    const ipfsPath = "/ipfs/a-fake-IPFS-id";

    // Mock some node endpoints:
    await mockNode.forCat(ipfsPath).thenReturn("Mock content");
    //Simple test for green light

    const result = await storeMetadata(mockMetadata, mockNode);

    const data = await getMetadata(result.cid);

    const contentText = new TextDecoder().decode(data);
    expect(contentText).to.equal("Mock content");

    // //TODO from https://github.com/achingbrain/it/blob/master/packages/it-all/src/index.ts
    // // package was not loading and TS-IGNORE
    // async function all<T>(source: AsyncIterable<T> | Iterable<T>): Promise<T[]> {
    //   const arr = [];

    //   for await (const entry of source) {
    //     // @ts-ignore
    //     arr.push(entry);
    //   }

    //   return arr;
    // }

    // let content = await all(out);

    // Assert on the response:
  });
});
