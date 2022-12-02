// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { HypercertsGoerliTypes } from './sources/hypercerts-goerli/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Contributor = {
  /** contibutor ID is an Ethereum address */
  id: Scalars['ID'];
  /** hypercert the contributor has contributed to */
  hypercerts: Array<Hypercert>;
};


export type ContributorhypercertsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hypercert_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hypercert_filter>;
};

export type Contributor_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hypercerts_?: InputMaybe<Hypercert_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Contributor_orderBy =
  | 'id'
  | 'hypercerts';

export type Hypercert = {
  /** hypercert ID maps to the uint256 slotID in the ERC3525 Hypercert Minter */
  id: Scalars['ID'];
  /** fingerprint of the hyperspace claimed by the minter */
  claimHash: Scalars['Bytes'];
  /** address of the entity claiming the impact */
  minter: Scalars['String'];
  /** array of know addresses representing contributors to this impact claim */
  contributors: Array<Contributor>;
  /** unix timestamp declaring when impact started */
  impactDateFrom: Scalars['BigInt'];
  /** unix timestamp declaring when impact ended */
  impactDateTo: Scalars['BigInt'];
  /** array of impacts declared in claim */
  impactScopes: Array<ImpactScope>;
  /** unix timestamp declaring when work started */
  workDateFrom: Scalars['BigInt'];
  /** unix timestamp declaring when work ended */
  workDateTo: Scalars['BigInt'];
  /** array of work declared in claim */
  workScopes: Array<WorkScope>;
  /** array of rights an owner of the impact certificate holds */
  rights: Array<Right>;
  /** external reference, usually IPFS CID */
  uri: Scalars['String'];
  /** base64 formatted json string including SVG image */
  metadata: Scalars['String'];
  /** total unit of certificate, used for splitting and merging */
  totalUnits: Scalars['BigInt'];
  /** fractions of certificate */
  fractions: Array<HypercertFraction>;
  /** unix timestamp of last change to entity */
  lastUpdated: Scalars['BigInt'];
  /** hypercert version */
  version: Scalars['BigInt'];
};


export type HypercertcontributorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contributor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Contributor_filter>;
};


export type HypercertimpactScopesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ImpactScope_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ImpactScope_filter>;
};


export type HypercertworkScopesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkScope_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WorkScope_filter>;
};


export type HypercertrightsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Right_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Right_filter>;
};


export type HypercertfractionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HypercertFraction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HypercertFraction_filter>;
};

export type HypercertFraction = {
  /** fraction ID maps to the uint256 tokenID in the ERC3525 Hypercert Minter */
  id: Scalars['ID'];
  /** address of the entity owning the impact */
  owner: Owner;
  /** units held by the fraction, used for splitting and merging */
  units: Scalars['BigInt'];
  /** link to hypercert this fraction relates to */
  hypercert: Hypercert;
};

export type HypercertFraction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Owner_filter>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hypercert?: InputMaybe<Scalars['String']>;
  hypercert_not?: InputMaybe<Scalars['String']>;
  hypercert_gt?: InputMaybe<Scalars['String']>;
  hypercert_lt?: InputMaybe<Scalars['String']>;
  hypercert_gte?: InputMaybe<Scalars['String']>;
  hypercert_lte?: InputMaybe<Scalars['String']>;
  hypercert_in?: InputMaybe<Array<Scalars['String']>>;
  hypercert_not_in?: InputMaybe<Array<Scalars['String']>>;
  hypercert_contains?: InputMaybe<Scalars['String']>;
  hypercert_contains_nocase?: InputMaybe<Scalars['String']>;
  hypercert_not_contains?: InputMaybe<Scalars['String']>;
  hypercert_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hypercert_starts_with?: InputMaybe<Scalars['String']>;
  hypercert_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hypercert_not_starts_with?: InputMaybe<Scalars['String']>;
  hypercert_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hypercert_ends_with?: InputMaybe<Scalars['String']>;
  hypercert_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hypercert_not_ends_with?: InputMaybe<Scalars['String']>;
  hypercert_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hypercert_?: InputMaybe<Hypercert_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type HypercertFraction_orderBy =
  | 'id'
  | 'owner'
  | 'units'
  | 'hypercert';

export type Hypercert_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  claimHash?: InputMaybe<Scalars['Bytes']>;
  claimHash_not?: InputMaybe<Scalars['Bytes']>;
  claimHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  claimHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  claimHash_contains?: InputMaybe<Scalars['Bytes']>;
  claimHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  minter?: InputMaybe<Scalars['String']>;
  minter_not?: InputMaybe<Scalars['String']>;
  minter_gt?: InputMaybe<Scalars['String']>;
  minter_lt?: InputMaybe<Scalars['String']>;
  minter_gte?: InputMaybe<Scalars['String']>;
  minter_lte?: InputMaybe<Scalars['String']>;
  minter_in?: InputMaybe<Array<Scalars['String']>>;
  minter_not_in?: InputMaybe<Array<Scalars['String']>>;
  minter_contains?: InputMaybe<Scalars['String']>;
  minter_contains_nocase?: InputMaybe<Scalars['String']>;
  minter_not_contains?: InputMaybe<Scalars['String']>;
  minter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  minter_starts_with?: InputMaybe<Scalars['String']>;
  minter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minter_not_starts_with?: InputMaybe<Scalars['String']>;
  minter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minter_ends_with?: InputMaybe<Scalars['String']>;
  minter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minter_not_ends_with?: InputMaybe<Scalars['String']>;
  minter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contributors?: InputMaybe<Array<Scalars['String']>>;
  contributors_not?: InputMaybe<Array<Scalars['String']>>;
  contributors_contains?: InputMaybe<Array<Scalars['String']>>;
  contributors_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  contributors_not_contains?: InputMaybe<Array<Scalars['String']>>;
  contributors_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  contributors_?: InputMaybe<Contributor_filter>;
  impactDateFrom?: InputMaybe<Scalars['BigInt']>;
  impactDateFrom_not?: InputMaybe<Scalars['BigInt']>;
  impactDateFrom_gt?: InputMaybe<Scalars['BigInt']>;
  impactDateFrom_lt?: InputMaybe<Scalars['BigInt']>;
  impactDateFrom_gte?: InputMaybe<Scalars['BigInt']>;
  impactDateFrom_lte?: InputMaybe<Scalars['BigInt']>;
  impactDateFrom_in?: InputMaybe<Array<Scalars['BigInt']>>;
  impactDateFrom_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  impactDateTo?: InputMaybe<Scalars['BigInt']>;
  impactDateTo_not?: InputMaybe<Scalars['BigInt']>;
  impactDateTo_gt?: InputMaybe<Scalars['BigInt']>;
  impactDateTo_lt?: InputMaybe<Scalars['BigInt']>;
  impactDateTo_gte?: InputMaybe<Scalars['BigInt']>;
  impactDateTo_lte?: InputMaybe<Scalars['BigInt']>;
  impactDateTo_in?: InputMaybe<Array<Scalars['BigInt']>>;
  impactDateTo_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  impactScopes?: InputMaybe<Array<Scalars['String']>>;
  impactScopes_not?: InputMaybe<Array<Scalars['String']>>;
  impactScopes_contains?: InputMaybe<Array<Scalars['String']>>;
  impactScopes_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  impactScopes_not_contains?: InputMaybe<Array<Scalars['String']>>;
  impactScopes_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  impactScopes_?: InputMaybe<ImpactScope_filter>;
  workDateFrom?: InputMaybe<Scalars['BigInt']>;
  workDateFrom_not?: InputMaybe<Scalars['BigInt']>;
  workDateFrom_gt?: InputMaybe<Scalars['BigInt']>;
  workDateFrom_lt?: InputMaybe<Scalars['BigInt']>;
  workDateFrom_gte?: InputMaybe<Scalars['BigInt']>;
  workDateFrom_lte?: InputMaybe<Scalars['BigInt']>;
  workDateFrom_in?: InputMaybe<Array<Scalars['BigInt']>>;
  workDateFrom_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  workDateTo?: InputMaybe<Scalars['BigInt']>;
  workDateTo_not?: InputMaybe<Scalars['BigInt']>;
  workDateTo_gt?: InputMaybe<Scalars['BigInt']>;
  workDateTo_lt?: InputMaybe<Scalars['BigInt']>;
  workDateTo_gte?: InputMaybe<Scalars['BigInt']>;
  workDateTo_lte?: InputMaybe<Scalars['BigInt']>;
  workDateTo_in?: InputMaybe<Array<Scalars['BigInt']>>;
  workDateTo_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  workScopes?: InputMaybe<Array<Scalars['String']>>;
  workScopes_not?: InputMaybe<Array<Scalars['String']>>;
  workScopes_contains?: InputMaybe<Array<Scalars['String']>>;
  workScopes_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  workScopes_not_contains?: InputMaybe<Array<Scalars['String']>>;
  workScopes_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  workScopes_?: InputMaybe<WorkScope_filter>;
  rights?: InputMaybe<Array<Scalars['String']>>;
  rights_not?: InputMaybe<Array<Scalars['String']>>;
  rights_contains?: InputMaybe<Array<Scalars['String']>>;
  rights_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rights_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rights_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rights_?: InputMaybe<Right_filter>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalUnits?: InputMaybe<Scalars['BigInt']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fractions_?: InputMaybe<HypercertFraction_filter>;
  lastUpdated?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version?: InputMaybe<Scalars['BigInt']>;
  version_not?: InputMaybe<Scalars['BigInt']>;
  version_gt?: InputMaybe<Scalars['BigInt']>;
  version_lt?: InputMaybe<Scalars['BigInt']>;
  version_gte?: InputMaybe<Scalars['BigInt']>;
  version_lte?: InputMaybe<Scalars['BigInt']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Hypercert_orderBy =
  | 'id'
  | 'claimHash'
  | 'minter'
  | 'contributors'
  | 'impactDateFrom'
  | 'impactDateTo'
  | 'impactScopes'
  | 'workDateFrom'
  | 'workDateTo'
  | 'workScopes'
  | 'rights'
  | 'uri'
  | 'metadata'
  | 'totalUnits'
  | 'fractions'
  | 'lastUpdated'
  | 'version';

export type ImpactScope = {
  /** impaceScope ID maps to byts32 input of 'impactScopes' on Hypercert Minter */
  id: Scalars['ID'];
  /** natural language description of impact scope */
  text: Scalars['String'];
  /** array of hypercerts claiming this type of impact */
  hypercerts: Array<Hypercert>;
};


export type ImpactScopehypercertsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hypercert_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hypercert_filter>;
};

export type ImpactScope_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  text?: InputMaybe<Scalars['String']>;
  text_not?: InputMaybe<Scalars['String']>;
  text_gt?: InputMaybe<Scalars['String']>;
  text_lt?: InputMaybe<Scalars['String']>;
  text_gte?: InputMaybe<Scalars['String']>;
  text_lte?: InputMaybe<Scalars['String']>;
  text_in?: InputMaybe<Array<Scalars['String']>>;
  text_not_in?: InputMaybe<Array<Scalars['String']>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_contains_nocase?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_contains_nocase?: InputMaybe<Scalars['String']>;
  text_starts_with?: InputMaybe<Scalars['String']>;
  text_starts_with_nocase?: InputMaybe<Scalars['String']>;
  text_not_starts_with?: InputMaybe<Scalars['String']>;
  text_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  text_ends_with?: InputMaybe<Scalars['String']>;
  text_ends_with_nocase?: InputMaybe<Scalars['String']>;
  text_not_ends_with?: InputMaybe<Scalars['String']>;
  text_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hypercerts_?: InputMaybe<Hypercert_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ImpactScope_orderBy =
  | 'id'
  | 'text'
  | 'hypercerts';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Owner = {
  /** owner ID is an Ethereum address */
  id: Scalars['ID'];
};

export type Owner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Owner_orderBy =
  | 'id';

export type Query = {
  contributor?: Maybe<Contributor>;
  contributors: Array<Contributor>;
  owner?: Maybe<Owner>;
  owners: Array<Owner>;
  hypercert?: Maybe<Hypercert>;
  hypercerts: Array<Hypercert>;
  hypercertFraction?: Maybe<HypercertFraction>;
  hypercertFractions: Array<HypercertFraction>;
  impactScope?: Maybe<ImpactScope>;
  impactScopes: Array<ImpactScope>;
  workScope?: Maybe<WorkScope>;
  workScopes: Array<WorkScope>;
  right?: Maybe<Right>;
  rights: Array<Right>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerycontributorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontributorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contributor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Contributor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Owner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Owner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hypercert_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hypercert_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertFractionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertFractionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HypercertFraction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HypercertFraction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryimpactScopeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryimpactScopesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ImpactScope_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ImpactScope_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryworkScopeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryworkScopesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkScope_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WorkScope_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrightArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrightsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Right_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Right_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Right = {
  /** impaceScope ID maps to bytes32 input of 'rights' on Hypercert Minter */
  id: Scalars['ID'];
  /** natural language description of rights the owner holds */
  text: Scalars['String'];
  /** array of hypercerts claiming these type of rights */
  hypercerts: Array<Hypercert>;
};


export type RighthypercertsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hypercert_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hypercert_filter>;
};

export type Right_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  text?: InputMaybe<Scalars['String']>;
  text_not?: InputMaybe<Scalars['String']>;
  text_gt?: InputMaybe<Scalars['String']>;
  text_lt?: InputMaybe<Scalars['String']>;
  text_gte?: InputMaybe<Scalars['String']>;
  text_lte?: InputMaybe<Scalars['String']>;
  text_in?: InputMaybe<Array<Scalars['String']>>;
  text_not_in?: InputMaybe<Array<Scalars['String']>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_contains_nocase?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_contains_nocase?: InputMaybe<Scalars['String']>;
  text_starts_with?: InputMaybe<Scalars['String']>;
  text_starts_with_nocase?: InputMaybe<Scalars['String']>;
  text_not_starts_with?: InputMaybe<Scalars['String']>;
  text_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  text_ends_with?: InputMaybe<Scalars['String']>;
  text_ends_with_nocase?: InputMaybe<Scalars['String']>;
  text_not_ends_with?: InputMaybe<Scalars['String']>;
  text_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hypercerts_?: InputMaybe<Hypercert_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Right_orderBy =
  | 'id'
  | 'text'
  | 'hypercerts';

export type Subscription = {
  contributor?: Maybe<Contributor>;
  contributors: Array<Contributor>;
  owner?: Maybe<Owner>;
  owners: Array<Owner>;
  hypercert?: Maybe<Hypercert>;
  hypercerts: Array<Hypercert>;
  hypercertFraction?: Maybe<HypercertFraction>;
  hypercertFractions: Array<HypercertFraction>;
  impactScope?: Maybe<ImpactScope>;
  impactScopes: Array<ImpactScope>;
  workScope?: Maybe<WorkScope>;
  workScopes: Array<WorkScope>;
  right?: Maybe<Right>;
  rights: Array<Right>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioncontributorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontributorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contributor_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Contributor_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Owner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Owner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hypercert_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hypercert_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertFractionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertFractionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HypercertFraction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HypercertFraction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionimpactScopeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionimpactScopesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ImpactScope_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ImpactScope_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionworkScopeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionworkScopesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkScope_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WorkScope_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrightArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrightsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Right_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Right_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type WorkScope = {
  /** impaceScope ID maps to bytes32 input of 'workScopes' on Hypercert Minter */
  id: Scalars['ID'];
  /** natural language description of work scope */
  text: Scalars['String'];
  /** array of hypercerts claiming this type of work */
  hypercerts: Array<Hypercert>;
};


export type WorkScopehypercertsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hypercert_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hypercert_filter>;
};

export type WorkScope_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  text?: InputMaybe<Scalars['String']>;
  text_not?: InputMaybe<Scalars['String']>;
  text_gt?: InputMaybe<Scalars['String']>;
  text_lt?: InputMaybe<Scalars['String']>;
  text_gte?: InputMaybe<Scalars['String']>;
  text_lte?: InputMaybe<Scalars['String']>;
  text_in?: InputMaybe<Array<Scalars['String']>>;
  text_not_in?: InputMaybe<Array<Scalars['String']>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_contains_nocase?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_contains_nocase?: InputMaybe<Scalars['String']>;
  text_starts_with?: InputMaybe<Scalars['String']>;
  text_starts_with_nocase?: InputMaybe<Scalars['String']>;
  text_not_starts_with?: InputMaybe<Scalars['String']>;
  text_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  text_ends_with?: InputMaybe<Scalars['String']>;
  text_ends_with_nocase?: InputMaybe<Scalars['String']>;
  text_not_ends_with?: InputMaybe<Scalars['String']>;
  text_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hypercerts_?: InputMaybe<Hypercert_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type WorkScope_orderBy =
  | 'id'
  | 'text'
  | 'hypercerts';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Contributor: ResolverTypeWrapper<Contributor>;
  Contributor_filter: Contributor_filter;
  Contributor_orderBy: Contributor_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Hypercert: ResolverTypeWrapper<Hypercert>;
  HypercertFraction: ResolverTypeWrapper<HypercertFraction>;
  HypercertFraction_filter: HypercertFraction_filter;
  HypercertFraction_orderBy: HypercertFraction_orderBy;
  Hypercert_filter: Hypercert_filter;
  Hypercert_orderBy: Hypercert_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImpactScope: ResolverTypeWrapper<ImpactScope>;
  ImpactScope_filter: ImpactScope_filter;
  ImpactScope_orderBy: ImpactScope_orderBy;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderDirection: OrderDirection;
  Owner: ResolverTypeWrapper<Owner>;
  Owner_filter: Owner_filter;
  Owner_orderBy: Owner_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Right: ResolverTypeWrapper<Right>;
  Right_filter: Right_filter;
  Right_orderBy: Right_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  WorkScope: ResolverTypeWrapper<WorkScope>;
  WorkScope_filter: WorkScope_filter;
  WorkScope_orderBy: WorkScope_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Contributor: Contributor;
  Contributor_filter: Contributor_filter;
  Float: Scalars['Float'];
  Hypercert: Hypercert;
  HypercertFraction: HypercertFraction;
  HypercertFraction_filter: HypercertFraction_filter;
  Hypercert_filter: Hypercert_filter;
  ID: Scalars['ID'];
  ImpactScope: ImpactScope;
  ImpactScope_filter: ImpactScope_filter;
  Int: Scalars['Int'];
  Owner: Owner;
  Owner_filter: Owner_filter;
  Query: {};
  Right: Right;
  Right_filter: Right_filter;
  String: Scalars['String'];
  Subscription: {};
  WorkScope: WorkScope;
  WorkScope_filter: WorkScope_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ContributorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Contributor'] = ResolversParentTypes['Contributor']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hypercerts?: Resolver<Array<ResolversTypes['Hypercert']>, ParentType, ContextType, RequireFields<ContributorhypercertsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HypercertResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Hypercert'] = ResolversParentTypes['Hypercert']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  claimHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  minter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contributors?: Resolver<Array<ResolversTypes['Contributor']>, ParentType, ContextType, RequireFields<HypercertcontributorsArgs, 'skip' | 'first'>>;
  impactDateFrom?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  impactDateTo?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  impactScopes?: Resolver<Array<ResolversTypes['ImpactScope']>, ParentType, ContextType, RequireFields<HypercertimpactScopesArgs, 'skip' | 'first'>>;
  workDateFrom?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  workDateTo?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  workScopes?: Resolver<Array<ResolversTypes['WorkScope']>, ParentType, ContextType, RequireFields<HypercertworkScopesArgs, 'skip' | 'first'>>;
  rights?: Resolver<Array<ResolversTypes['Right']>, ParentType, ContextType, RequireFields<HypercertrightsArgs, 'skip' | 'first'>>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalUnits?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fractions?: Resolver<Array<ResolversTypes['HypercertFraction']>, ParentType, ContextType, RequireFields<HypercertfractionsArgs, 'skip' | 'first'>>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HypercertFractionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HypercertFraction'] = ResolversParentTypes['HypercertFraction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Owner'], ParentType, ContextType>;
  units?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hypercert?: Resolver<ResolversTypes['Hypercert'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImpactScopeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImpactScope'] = ResolversParentTypes['ImpactScope']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hypercerts?: Resolver<Array<ResolversTypes['Hypercert']>, ParentType, ContextType, RequireFields<ImpactScopehypercertsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  contributor?: Resolver<Maybe<ResolversTypes['Contributor']>, ParentType, ContextType, RequireFields<QuerycontributorArgs, 'id' | 'subgraphError'>>;
  contributors?: Resolver<Array<ResolversTypes['Contributor']>, ParentType, ContextType, RequireFields<QuerycontributorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType, RequireFields<QueryownerArgs, 'id' | 'subgraphError'>>;
  owners?: Resolver<Array<ResolversTypes['Owner']>, ParentType, ContextType, RequireFields<QueryownersArgs, 'skip' | 'first' | 'subgraphError'>>;
  hypercert?: Resolver<Maybe<ResolversTypes['Hypercert']>, ParentType, ContextType, RequireFields<QueryhypercertArgs, 'id' | 'subgraphError'>>;
  hypercerts?: Resolver<Array<ResolversTypes['Hypercert']>, ParentType, ContextType, RequireFields<QueryhypercertsArgs, 'skip' | 'first' | 'subgraphError'>>;
  hypercertFraction?: Resolver<Maybe<ResolversTypes['HypercertFraction']>, ParentType, ContextType, RequireFields<QueryhypercertFractionArgs, 'id' | 'subgraphError'>>;
  hypercertFractions?: Resolver<Array<ResolversTypes['HypercertFraction']>, ParentType, ContextType, RequireFields<QueryhypercertFractionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  impactScope?: Resolver<Maybe<ResolversTypes['ImpactScope']>, ParentType, ContextType, RequireFields<QueryimpactScopeArgs, 'id' | 'subgraphError'>>;
  impactScopes?: Resolver<Array<ResolversTypes['ImpactScope']>, ParentType, ContextType, RequireFields<QueryimpactScopesArgs, 'skip' | 'first' | 'subgraphError'>>;
  workScope?: Resolver<Maybe<ResolversTypes['WorkScope']>, ParentType, ContextType, RequireFields<QueryworkScopeArgs, 'id' | 'subgraphError'>>;
  workScopes?: Resolver<Array<ResolversTypes['WorkScope']>, ParentType, ContextType, RequireFields<QueryworkScopesArgs, 'skip' | 'first' | 'subgraphError'>>;
  right?: Resolver<Maybe<ResolversTypes['Right']>, ParentType, ContextType, RequireFields<QueryrightArgs, 'id' | 'subgraphError'>>;
  rights?: Resolver<Array<ResolversTypes['Right']>, ParentType, ContextType, RequireFields<QueryrightsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RightResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Right'] = ResolversParentTypes['Right']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hypercerts?: Resolver<Array<ResolversTypes['Hypercert']>, ParentType, ContextType, RequireFields<RighthypercertsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  contributor?: SubscriptionResolver<Maybe<ResolversTypes['Contributor']>, "contributor", ParentType, ContextType, RequireFields<SubscriptioncontributorArgs, 'id' | 'subgraphError'>>;
  contributors?: SubscriptionResolver<Array<ResolversTypes['Contributor']>, "contributors", ParentType, ContextType, RequireFields<SubscriptioncontributorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  owner?: SubscriptionResolver<Maybe<ResolversTypes['Owner']>, "owner", ParentType, ContextType, RequireFields<SubscriptionownerArgs, 'id' | 'subgraphError'>>;
  owners?: SubscriptionResolver<Array<ResolversTypes['Owner']>, "owners", ParentType, ContextType, RequireFields<SubscriptionownersArgs, 'skip' | 'first' | 'subgraphError'>>;
  hypercert?: SubscriptionResolver<Maybe<ResolversTypes['Hypercert']>, "hypercert", ParentType, ContextType, RequireFields<SubscriptionhypercertArgs, 'id' | 'subgraphError'>>;
  hypercerts?: SubscriptionResolver<Array<ResolversTypes['Hypercert']>, "hypercerts", ParentType, ContextType, RequireFields<SubscriptionhypercertsArgs, 'skip' | 'first' | 'subgraphError'>>;
  hypercertFraction?: SubscriptionResolver<Maybe<ResolversTypes['HypercertFraction']>, "hypercertFraction", ParentType, ContextType, RequireFields<SubscriptionhypercertFractionArgs, 'id' | 'subgraphError'>>;
  hypercertFractions?: SubscriptionResolver<Array<ResolversTypes['HypercertFraction']>, "hypercertFractions", ParentType, ContextType, RequireFields<SubscriptionhypercertFractionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  impactScope?: SubscriptionResolver<Maybe<ResolversTypes['ImpactScope']>, "impactScope", ParentType, ContextType, RequireFields<SubscriptionimpactScopeArgs, 'id' | 'subgraphError'>>;
  impactScopes?: SubscriptionResolver<Array<ResolversTypes['ImpactScope']>, "impactScopes", ParentType, ContextType, RequireFields<SubscriptionimpactScopesArgs, 'skip' | 'first' | 'subgraphError'>>;
  workScope?: SubscriptionResolver<Maybe<ResolversTypes['WorkScope']>, "workScope", ParentType, ContextType, RequireFields<SubscriptionworkScopeArgs, 'id' | 'subgraphError'>>;
  workScopes?: SubscriptionResolver<Array<ResolversTypes['WorkScope']>, "workScopes", ParentType, ContextType, RequireFields<SubscriptionworkScopesArgs, 'skip' | 'first' | 'subgraphError'>>;
  right?: SubscriptionResolver<Maybe<ResolversTypes['Right']>, "right", ParentType, ContextType, RequireFields<SubscriptionrightArgs, 'id' | 'subgraphError'>>;
  rights?: SubscriptionResolver<Array<ResolversTypes['Right']>, "rights", ParentType, ContextType, RequireFields<SubscriptionrightsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type WorkScopeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WorkScope'] = ResolversParentTypes['WorkScope']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hypercerts?: Resolver<Array<ResolversTypes['Hypercert']>, ParentType, ContextType, RequireFields<WorkScopehypercertsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Contributor?: ContributorResolvers<ContextType>;
  Hypercert?: HypercertResolvers<ContextType>;
  HypercertFraction?: HypercertFractionResolvers<ContextType>;
  ImpactScope?: ImpactScopeResolvers<ContextType>;
  Owner?: OwnerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Right?: RightResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  WorkScope?: WorkScopeResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = HypercertsGoerliTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/hypercerts-goerli/introspectionSchema":
      return import("./sources/hypercerts-goerli/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const hypercertsGoerliTransforms = [];
const additionalTypeDefs = [] as any[];
const hypercertsGoerliHandler = new GraphqlHandler({
              name: "hypercerts-goerli",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/bitbeckers/hypercerts-goerli"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("hypercerts-goerli"),
              logger: logger.child("hypercerts-goerli"),
              importFn,
            });
sources[0] = {
          name: 'hypercerts-goerli',
          handler: hypercertsGoerliHandler,
          transforms: hypercertsGoerliTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));