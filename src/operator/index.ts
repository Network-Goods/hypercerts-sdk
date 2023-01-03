import { NFTStorage, CIDString, Blob } from 'nft.storage'
import { HypercertMetadata } from "../../types/metadata";
const IPFS = require("ipfs-http-client");

// Default IPFS gateway
// The default IPFS gateway does not support pinning
const DEFAULT_IPFS_GATEWAY = "https://ipfs.io/api/v0";
const ipfsClientOptions = {
  url: DEFAULT_IPFS_GATEWAY,
};
const defaultIpfsClient = IPFS.create(ipfsClientOptions);
type CID = typeof defaultIpfsClient.ipfsPath;

// NFT.Storage
const NFT_STORAGE_TOKEN = process.env.NFT_STORAGE_TOKEN ?? "MISSING_TOKEN";
const NFT_STORAGE_IPFS_GATEWAY = "https://nftstorage.link";
const defaultNftStorageClient = new NFTStorage({ token: NFT_STORAGE_TOKEN });

interface IpfsClient {
  add: (data: string) => ReturnType<typeof defaultIpfsClient.add>;
  cat: (data: CID) => ReturnType<typeof defaultIpfsClient.cat>;
}

export const storeMetadata = async (data: HypercertMetadata, targetClient?: NFTStorage): Promise<CIDString> => {
  console.log("Storing metadata: ", data);
  const client = targetClient ?? defaultNftStorageClient;
  const blob = new Blob([JSON.stringify(data)], {type : "application/json"})
  return await client.storeBlob(blob);
};

export const getMetadata = async (cid: string, targetClient?: IpfsClient) => {
  console.log(`Getting metadata: ${cid}`);
  const client = targetClient ?? defaultIpfsClient;
  return client.cat(cid);
};

export const deleteMetadata = async (cid: string, targetClient?: NFTStorage) => {
  console.log(`Deleting metadata: ${cid}`);
  const client = targetClient ?? defaultNftStorageClient;
  return client.delete(cid);
};