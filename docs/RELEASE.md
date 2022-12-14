# Release notes

## 0.0.12

* JSON assertion

## 0.0.11

* Refactored to use ESM ("type": "module")
* Refactered Mocha to Jest
* Added basic assertions for the exported interface functions
* Updated build scripts for stabler releasing
* Enforce graphclient dependencies

... [Numbers got lost in testing releasing]
## 0.0.6

* Added graphql deps to solve publishing blocker

## 0.0.5

* Added `storeData` to upload Blobs to IPFS for non-metadata data upload
* Added `getData` to retrieve those blobs
* Refactored GraphQL queries to use graphclient generated SDK for better typings
* Updated Graph client and types
* Export ESM module only
* Add allowList property to `HypercertMetaData`

## 0.0.4

* Added `ClaimById` query
* Added `ClaimTokensByClaim` query
* Ensure `getMetaData()` always returns a value

## 0.0.3

* Updated `@bitbeckers/hypercerts-protocol:0.0.5` to `@network-goods/hypercerts-protocol:0.0.6` including imports
* Added `RELEASE.md` to `docs`
* Replaced `fetch` with `axios` for testing
* Updated default IPFS gateway address and CID URL inference