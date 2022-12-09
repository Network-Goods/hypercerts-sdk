import { expect, assert } from "chai";
import { createClient } from "../src/index";

import { concat as uint8ArrayConcat, toString as uint8ToString } from "uint8arrays";

// Import MockIPFS and create a fake node:
import * as MockIPFS from "mockipfs";
const mockNode = MockIPFS.getLocal();

describe("Check connection", () => {
  // Start & stop your mock node to reset state between tests
  beforeEach(() => mockNode.start());
  afterEach(() => mockNode.stop());

  it("checking if client stores simple data", async () => {
    const ipfsPath = "/ipfs/a-fake-IPFS-id";

    // Mock some node endpoints:
    await mockNode.forCat(ipfsPath).thenReturn("Mock content");
    //Simple test for green light

    const ipfsClient = createClient(mockNode.ipfsOptions);

    const out = ipfsClient.cat(ipfsPath);

    //TODO from https://github.com/achingbrain/it/blob/master/packages/it-all/src/index.ts
    // package was not loading and TS-IGNORE
    async function all<T>(source: AsyncIterable<T> | Iterable<T>): Promise<T[]> {
      const arr = [];

      for await (const entry of source) {
        // @ts-ignore
        arr.push(entry);
      }

      return arr;
    }

    let content = await all(out);

    // Assert on the response:
    const contentText = uint8ToString(uint8ArrayConcat(content));
    expect(contentText).to.equal("Mock content");
  });
});
