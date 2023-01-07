# Release notes

## 0.0.5

* Added `storeData` to upload Blobs to IPFS for non-metadata data upload
* Refactored GraphQL queries to use graphclient generated SDK for better typings

## 0.0.4

* Added `ClaimById` query
* Added `ClaimTokensByClaim` query
* Ensure `getMetaData()` always returns a value

## 0.0.3

* Updated `@bitbeckers/hypercerts-protocol:0.0.5` to `@network-goods/hypercerts-protocol:0.0.6` including imports
* Added `RELEASE.md` to `docs`
* Replaced `fetch` with `axios` for testing
* Updated default IPFS gateway address and CID URL inference