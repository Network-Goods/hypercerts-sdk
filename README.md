# Hypercert SDK

## Set up

### Configuration

1. Copy `.env.template` to `.env`
2. Create an API key on [NFT.Storage](https://nft.storage/) by going [here](https://nft.storage/manage). Add this to your config.


### Dependencies

```bash
yarn install
```

### Build

```bash
yarn build
```

`yarn lerna run bootstrap`

`yarn lerna run tsc`

## Interface

[API documentation](/docs/API.md)
[Graph playground](https://thegraph.com/hosted-service/subgraph/bitbeckers/hypercerts-dev)

## Updating Plasmic designs

The visual designs are edited in [Plasmic](https://plasmic.app?ref=ryscheng). You can sign up for an account [here](https://plasmic.app?ref=ryscheng).

These are then manually synced into React components. You can find a list of all Plasmic-generated React components in `plasmic.json`.

To update the design:

1. Navigate to the [Plasmic project](https://studio.plasmic.app/projects/tKtnZiEMup1PmF99tS3Jhx/). Make sure you have edit permissions.

2. Sync the designs into the repository via `yarn plasmic:sync`.

3. If you are updating the design-code API, make sure to edit the respective wrapper file in `./src/components` (e.g. `HypercertImage.tsx`).

For docs on how to use Plasmic, see the [docs](https://docs.plasmic.app/learn/plasmic-studio-guide/).
Note: this is a different usage pattern than what we do in Next.js codebases.
https://github.com/vercel/next.js/issues/19936


## Packages

### Contracts

Typed instances of Hypercert protocol

### Metadata

Metadata validator/generator/uploader

### Graph Client

GraphQL client for Hypercerts with predefined queries and client

### Types

- Contracts
- Graph entities
- Hypercert domain


-- to be rewritten:
* Example metadata schema's
* Yup validation


Wrapper for [Graph-client](https://github.com/graphprotocol/graph-client)