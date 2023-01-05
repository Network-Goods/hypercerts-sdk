// @ts-ignore
import { NFTStorage, CIDString, Blob } from "nft.storage";
import { HypercertMetadata } from "../../types/metadata";

// NFT.Storage
const NFT_STORAGE_TOKEN = process.env.NFT_STORAGE_TOKEN ?? "MISSING_TOKEN";
const NFT_STORAGE_IPFS_GATEWAY = "https://nftstorage.link";
const defaultNftStorageClient = new NFTStorage({ token: NFT_STORAGE_TOKEN });

export const storeMetadata = async (data: HypercertMetadata, targetClient?: NFTStorage): Promise<CIDString> => {
  console.log("Storing metadata: ", data);
  const client = targetClient ?? defaultNftStorageClient;

  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

  return await client.storeBlob(blob);
};

export const getMetadata = async (cid: string) => {
  const nftStorageGatewayLink = cid.replace("ipfs://", `${NFT_STORAGE_IPFS_GATEWAY}/ipfs/`);
  console.log(`Getting metadata: ${cid}`);
  return fetch(nftStorageGatewayLink).then((result) => result.json() as Promise<HypercertMetadata>);
};

export const deleteMetadata = async (cid: string, targetClient?: NFTStorage) => {
  console.log(`Deleting metadata: ${cid}`);
  const client = targetClient ?? defaultNftStorageClient;
  return client.delete(cid);
};
