// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace HypercertsGoerliTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

  export type QuerySdk = {
      /** null **/
  contributor: InContextSdkMethod<Query['contributor'], QuerycontributorArgs, MeshContext>,
  /** null **/
  contributors: InContextSdkMethod<Query['contributors'], QuerycontributorsArgs, MeshContext>,
  /** null **/
  owner: InContextSdkMethod<Query['owner'], QueryownerArgs, MeshContext>,
  /** null **/
  owners: InContextSdkMethod<Query['owners'], QueryownersArgs, MeshContext>,
  /** null **/
  hypercert: InContextSdkMethod<Query['hypercert'], QueryhypercertArgs, MeshContext>,
  /** null **/
  hypercerts: InContextSdkMethod<Query['hypercerts'], QueryhypercertsArgs, MeshContext>,
  /** null **/
  hypercertFraction: InContextSdkMethod<Query['hypercertFraction'], QueryhypercertFractionArgs, MeshContext>,
  /** null **/
  hypercertFractions: InContextSdkMethod<Query['hypercertFractions'], QueryhypercertFractionsArgs, MeshContext>,
  /** null **/
  impactScope: InContextSdkMethod<Query['impactScope'], QueryimpactScopeArgs, MeshContext>,
  /** null **/
  impactScopes: InContextSdkMethod<Query['impactScopes'], QueryimpactScopesArgs, MeshContext>,
  /** null **/
  workScope: InContextSdkMethod<Query['workScope'], QueryworkScopeArgs, MeshContext>,
  /** null **/
  workScopes: InContextSdkMethod<Query['workScopes'], QueryworkScopesArgs, MeshContext>,
  /** null **/
  right: InContextSdkMethod<Query['right'], QueryrightArgs, MeshContext>,
  /** null **/
  rights: InContextSdkMethod<Query['rights'], QueryrightsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  contributor: InContextSdkMethod<Subscription['contributor'], SubscriptioncontributorArgs, MeshContext>,
  /** null **/
  contributors: InContextSdkMethod<Subscription['contributors'], SubscriptioncontributorsArgs, MeshContext>,
  /** null **/
  owner: InContextSdkMethod<Subscription['owner'], SubscriptionownerArgs, MeshContext>,
  /** null **/
  owners: InContextSdkMethod<Subscription['owners'], SubscriptionownersArgs, MeshContext>,
  /** null **/
  hypercert: InContextSdkMethod<Subscription['hypercert'], SubscriptionhypercertArgs, MeshContext>,
  /** null **/
  hypercerts: InContextSdkMethod<Subscription['hypercerts'], SubscriptionhypercertsArgs, MeshContext>,
  /** null **/
  hypercertFraction: InContextSdkMethod<Subscription['hypercertFraction'], SubscriptionhypercertFractionArgs, MeshContext>,
  /** null **/
  hypercertFractions: InContextSdkMethod<Subscription['hypercertFractions'], SubscriptionhypercertFractionsArgs, MeshContext>,
  /** null **/
  impactScope: InContextSdkMethod<Subscription['impactScope'], SubscriptionimpactScopeArgs, MeshContext>,
  /** null **/
  impactScopes: InContextSdkMethod<Subscription['impactScopes'], SubscriptionimpactScopesArgs, MeshContext>,
  /** null **/
  workScope: InContextSdkMethod<Subscription['workScope'], SubscriptionworkScopeArgs, MeshContext>,
  /** null **/
  workScopes: InContextSdkMethod<Subscription['workScopes'], SubscriptionworkScopesArgs, MeshContext>,
  /** null **/
  right: InContextSdkMethod<Subscription['right'], SubscriptionrightArgs, MeshContext>,
  /** null **/
  rights: InContextSdkMethod<Subscription['rights'], SubscriptionrightsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["hypercerts-goerli"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
