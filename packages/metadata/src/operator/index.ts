import { CID, create, IPFSHTTPClient } from "ipfs-http-client";
import { AddResult } from "ipfs-http-client/types/src/add-all";
import { HypercertMetadata } from "../../types/metadata";

const clientOptions = { url: "https://ipfs.io/api/v0" };
const defaultClient = create(clientOptions);

const storeMetadata = async (data: HypercertMetadata, client?: IPFSHTTPClient): Promise<AddResult> => {
  console.log("Storing metadata: ", data);
  if (!client) {
    return defaultClient.add(JSON.stringify(data));
  }
  return client.add(JSON.stringify(data));
};

const getMetadata = async (cid: CID | string, client?: IPFSHTTPClient) => {
  console.log("Getting metadata: ", cid.toString());

  if (!client) {
    return defaultClient.cat(cid);
  }
  return client.cat(cid);
};

export { storeMetadata, getMetadata };
