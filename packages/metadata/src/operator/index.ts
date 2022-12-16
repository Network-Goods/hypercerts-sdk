import { CID, create, IPFSHTTPClient } from "ipfs-http-client";
import { HypercertMetadata } from "../../types/metadata";

const clientOptions = { url: "https://ipfs.io/api/v0" };
const defaultClient = create(clientOptions);

const storeMetadata = async (data: HypercertMetadata, client?: IPFSHTTPClient) => {
  if (!client) {
    return defaultClient.add(JSON.stringify(data));
  }
  return client.add(JSON.stringify(data));
};

const getMetadata = async (cid: CID, client?: IPFSHTTPClient) => {
  if (!client) {
    return defaultClient.cat(cid);
  }
  return client.cat(cid);
};

export { storeMetadata, getMetadata };
