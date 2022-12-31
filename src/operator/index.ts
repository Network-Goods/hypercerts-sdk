const IPFS = require("ipfs-http-client");
import { HypercertMetadata } from "../../types/metadata";

const clientOptions = { url: "https://ipfs.io/api/v0" };
const defaultClient = IPFS.create(clientOptions);

type CID = typeof defaultClient.ipfsPath;

interface Client {
  add: (data: string) => ReturnType<typeof defaultClient.add>;
  cat: (data: CID) => ReturnType<typeof defaultClient.cat>;
}



export const storeMetadata = async (data: HypercertMetadata, client?: Client) => {
  console.log("Storing metadata: ", data);
  if (!client) {
    return defaultClient.add(JSON.stringify(data));
  }
  return client.add(JSON.stringify(data));
};

export const getMetadata = async (cid: CID, client?: Client) => {
  console.log("Getting metadata: ", cid.toString());

  if (!client) {
    return defaultClient.cat(cid);
  }
  return client.cat(cid);
};
