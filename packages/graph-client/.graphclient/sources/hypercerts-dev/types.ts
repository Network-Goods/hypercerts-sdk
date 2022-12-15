// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace HypercertsDevTypes {
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

export type AdminChanged = {
  id: Scalars['Bytes'];
  previousAdmin: Scalars['Bytes'];
  newAdmin: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AdminChanged_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdmin?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdmin?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not?: InputMaybe<Scalars['Bytes']>;
  newAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AdminChanged_orderBy =
  | 'id'
  | 'previousAdmin'
  | 'newAdmin'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type AllowlistCreated = {
  id: Scalars['Bytes'];
  claimID: Scalars['BigInt'];
  root: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AllowlistCreated_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  claimID?: InputMaybe<Scalars['BigInt']>;
  claimID_not?: InputMaybe<Scalars['BigInt']>;
  claimID_gt?: InputMaybe<Scalars['BigInt']>;
  claimID_lt?: InputMaybe<Scalars['BigInt']>;
  claimID_gte?: InputMaybe<Scalars['BigInt']>;
  claimID_lte?: InputMaybe<Scalars['BigInt']>;
  claimID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  root?: InputMaybe<Scalars['Bytes']>;
  root_not?: InputMaybe<Scalars['Bytes']>;
  root_in?: InputMaybe<Array<Scalars['Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  root_contains?: InputMaybe<Scalars['Bytes']>;
  root_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AllowlistCreated_orderBy =
  | 'id'
  | 'claimID'
  | 'root'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type ApprovalForAll = {
  id: Scalars['Bytes'];
  account: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  approved: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ApprovalForAll_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ApprovalForAll_orderBy =
  | 'id'
  | 'account'
  | 'operator'
  | 'approved'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BeaconUpgraded = {
  id: Scalars['Bytes'];
  beacon: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type BeaconUpgraded_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  beacon?: InputMaybe<Scalars['Bytes']>;
  beacon_not?: InputMaybe<Scalars['Bytes']>;
  beacon_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beacon_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beacon_contains?: InputMaybe<Scalars['Bytes']>;
  beacon_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type BeaconUpgraded_orderBy =
  | 'id'
  | 'beacon'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ClaimStored = {
  id: Scalars['Bytes'];
  claimID: Scalars['BigInt'];
  uri: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ClaimStored_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  claimID?: InputMaybe<Scalars['BigInt']>;
  claimID_not?: InputMaybe<Scalars['BigInt']>;
  claimID_gt?: InputMaybe<Scalars['BigInt']>;
  claimID_lt?: InputMaybe<Scalars['BigInt']>;
  claimID_gte?: InputMaybe<Scalars['BigInt']>;
  claimID_lte?: InputMaybe<Scalars['BigInt']>;
  claimID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ClaimStored_orderBy =
  | 'id'
  | 'claimID'
  | 'uri'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type HypercertMinterAdminChanged = {
  id: Scalars['Bytes'];
  previousAdmin: Scalars['Bytes'];
  newAdmin: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type HypercertMinterAdminChanged_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdmin?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdmin?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not?: InputMaybe<Scalars['Bytes']>;
  newAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  newAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type HypercertMinterAdminChanged_orderBy =
  | 'id'
  | 'previousAdmin'
  | 'newAdmin'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type HypercertMinterBeaconUpgraded = {
  id: Scalars['Bytes'];
  beacon: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type HypercertMinterBeaconUpgraded_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  beacon?: InputMaybe<Scalars['Bytes']>;
  beacon_not?: InputMaybe<Scalars['Bytes']>;
  beacon_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beacon_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beacon_contains?: InputMaybe<Scalars['Bytes']>;
  beacon_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type HypercertMinterBeaconUpgraded_orderBy =
  | 'id'
  | 'beacon'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type HypercertMinterUpgraded = {
  id: Scalars['Bytes'];
  implementation: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type HypercertMinterUpgraded_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  implementation?: InputMaybe<Scalars['Bytes']>;
  implementation_not?: InputMaybe<Scalars['Bytes']>;
  implementation_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementation_contains?: InputMaybe<Scalars['Bytes']>;
  implementation_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type HypercertMinterUpgraded_orderBy =
  | 'id'
  | 'implementation'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Initialized = {
  id: Scalars['Bytes'];
  version: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Initialized_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  version?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Initialized_orderBy =
  | 'id'
  | 'version'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type LeafClaimed = {
  id: Scalars['Bytes'];
  claimID: Scalars['BigInt'];
  leaf: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type LeafClaimed_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  claimID?: InputMaybe<Scalars['BigInt']>;
  claimID_not?: InputMaybe<Scalars['BigInt']>;
  claimID_gt?: InputMaybe<Scalars['BigInt']>;
  claimID_lt?: InputMaybe<Scalars['BigInt']>;
  claimID_gte?: InputMaybe<Scalars['BigInt']>;
  claimID_lte?: InputMaybe<Scalars['BigInt']>;
  claimID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leaf?: InputMaybe<Scalars['Bytes']>;
  leaf_not?: InputMaybe<Scalars['Bytes']>;
  leaf_in?: InputMaybe<Array<Scalars['Bytes']>>;
  leaf_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  leaf_contains?: InputMaybe<Scalars['Bytes']>;
  leaf_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LeafClaimed_orderBy =
  | 'id'
  | 'claimID'
  | 'leaf'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type OwnershipTransferred = {
  id: Scalars['Bytes'];
  previousOwner: Scalars['Bytes'];
  newOwner: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type OwnershipTransferred_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousOwner?: InputMaybe<Scalars['Bytes']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner?: InputMaybe<Scalars['Bytes']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type OwnershipTransferred_orderBy =
  | 'id'
  | 'previousOwner'
  | 'newOwner'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Query = {
  adminChanged?: Maybe<AdminChanged>;
  adminChangeds: Array<AdminChanged>;
  beaconUpgraded?: Maybe<BeaconUpgraded>;
  beaconUpgradeds: Array<BeaconUpgraded>;
  upgraded?: Maybe<Upgraded>;
  upgradeds: Array<Upgraded>;
  hypercertMinterAdminChanged?: Maybe<HypercertMinterAdminChanged>;
  hypercertMinterAdminChangeds: Array<HypercertMinterAdminChanged>;
  allowlistCreated?: Maybe<AllowlistCreated>;
  allowlistCreateds: Array<AllowlistCreated>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  hypercertMinterBeaconUpgraded?: Maybe<HypercertMinterBeaconUpgraded>;
  hypercertMinterBeaconUpgradeds: Array<HypercertMinterBeaconUpgraded>;
  claimStored?: Maybe<ClaimStored>;
  claimStoreds: Array<ClaimStored>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  leafClaimed?: Maybe<LeafClaimed>;
  leafClaimeds: Array<LeafClaimed>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  uri?: Maybe<URI>;
  uris: Array<URI>;
  hypercertMinterUpgraded?: Maybe<HypercertMinterUpgraded>;
  hypercertMinterUpgradeds: Array<HypercertMinterUpgraded>;
  valueTransfer?: Maybe<ValueTransfer>;
  valueTransfers: Array<ValueTransfer>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryadminChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryadminChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AdminChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdminChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybeaconUpgradedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybeaconUpgradedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeaconUpgraded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BeaconUpgraded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryupgradedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryupgradedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Upgraded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Upgraded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertMinterAdminChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertMinterAdminChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HypercertMinterAdminChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HypercertMinterAdminChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryallowlistCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryallowlistCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AllowlistCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AllowlistCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAll_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertMinterBeaconUpgradedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertMinterBeaconUpgradedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HypercertMinterBeaconUpgraded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HypercertMinterBeaconUpgraded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimStoredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimStoredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimStored_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimStored_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinitializedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinitializedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Initialized_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Initialized_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryleafClaimedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryleafClaimedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LeafClaimed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LeafClaimed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferSingleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferSinglesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferSingle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferSingle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuriArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryurisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<URI_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<URI_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertMinterUpgradedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhypercertMinterUpgradedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HypercertMinterUpgraded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HypercertMinterUpgraded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvalueTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvalueTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ValueTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValueTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  adminChanged?: Maybe<AdminChanged>;
  adminChangeds: Array<AdminChanged>;
  beaconUpgraded?: Maybe<BeaconUpgraded>;
  beaconUpgradeds: Array<BeaconUpgraded>;
  upgraded?: Maybe<Upgraded>;
  upgradeds: Array<Upgraded>;
  hypercertMinterAdminChanged?: Maybe<HypercertMinterAdminChanged>;
  hypercertMinterAdminChangeds: Array<HypercertMinterAdminChanged>;
  allowlistCreated?: Maybe<AllowlistCreated>;
  allowlistCreateds: Array<AllowlistCreated>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  hypercertMinterBeaconUpgraded?: Maybe<HypercertMinterBeaconUpgraded>;
  hypercertMinterBeaconUpgradeds: Array<HypercertMinterBeaconUpgraded>;
  claimStored?: Maybe<ClaimStored>;
  claimStoreds: Array<ClaimStored>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  leafClaimed?: Maybe<LeafClaimed>;
  leafClaimeds: Array<LeafClaimed>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  uri?: Maybe<URI>;
  uris: Array<URI>;
  hypercertMinterUpgraded?: Maybe<HypercertMinterUpgraded>;
  hypercertMinterUpgradeds: Array<HypercertMinterUpgraded>;
  valueTransfer?: Maybe<ValueTransfer>;
  valueTransfers: Array<ValueTransfer>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionadminChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionadminChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AdminChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdminChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbeaconUpgradedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbeaconUpgradedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeaconUpgraded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BeaconUpgraded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionupgradedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionupgradedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Upgraded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Upgraded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertMinterAdminChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertMinterAdminChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HypercertMinterAdminChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HypercertMinterAdminChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionallowlistCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionallowlistCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AllowlistCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AllowlistCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAll_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertMinterBeaconUpgradedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertMinterBeaconUpgradedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HypercertMinterBeaconUpgraded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HypercertMinterBeaconUpgraded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimStoredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimStoredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimStored_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimStored_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninitializedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninitializedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Initialized_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Initialized_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionleafClaimedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionleafClaimedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LeafClaimed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LeafClaimed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferSingleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferSinglesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferSingle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferSingle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuriArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionurisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<URI_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<URI_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertMinterUpgradedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhypercertMinterUpgradedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HypercertMinterUpgraded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HypercertMinterUpgraded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvalueTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvalueTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ValueTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValueTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TransferBatch = {
  id: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  tokenIds: Array<Scalars['BigInt']>;
  values: Array<Scalars['BigInt']>;
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TransferBatch_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenIds?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIds_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIds_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIds_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TransferBatch_orderBy =
  | 'id'
  | 'operator'
  | 'from'
  | 'to'
  | 'tokenIds'
  | 'values'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TransferSingle = {
  id: Scalars['Bytes'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  tokenID: Scalars['BigInt'];
  value: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TransferSingle_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenID?: InputMaybe<Scalars['BigInt']>;
  tokenID_not?: InputMaybe<Scalars['BigInt']>;
  tokenID_gt?: InputMaybe<Scalars['BigInt']>;
  tokenID_lt?: InputMaybe<Scalars['BigInt']>;
  tokenID_gte?: InputMaybe<Scalars['BigInt']>;
  tokenID_lte?: InputMaybe<Scalars['BigInt']>;
  tokenID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TransferSingle_orderBy =
  | 'id'
  | 'operator'
  | 'from'
  | 'to'
  | 'tokenID'
  | 'value'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type URI = {
  id: Scalars['Bytes'];
  value: Scalars['String'];
  tokenID: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type URI_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  value?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenID?: InputMaybe<Scalars['BigInt']>;
  tokenID_not?: InputMaybe<Scalars['BigInt']>;
  tokenID_gt?: InputMaybe<Scalars['BigInt']>;
  tokenID_lt?: InputMaybe<Scalars['BigInt']>;
  tokenID_gte?: InputMaybe<Scalars['BigInt']>;
  tokenID_lte?: InputMaybe<Scalars['BigInt']>;
  tokenID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type URI_orderBy =
  | 'id'
  | 'value'
  | 'tokenID'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Upgraded = {
  id: Scalars['Bytes'];
  implementation: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Upgraded_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  implementation?: InputMaybe<Scalars['Bytes']>;
  implementation_not?: InputMaybe<Scalars['Bytes']>;
  implementation_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementation_contains?: InputMaybe<Scalars['Bytes']>;
  implementation_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Upgraded_orderBy =
  | 'id'
  | 'implementation'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type ValueTransfer = {
  id: Scalars['Bytes'];
  fromTokenID: Scalars['BigInt'];
  toTokenID: Scalars['BigInt'];
  value: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ValueTransfer_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  fromTokenID?: InputMaybe<Scalars['BigInt']>;
  fromTokenID_not?: InputMaybe<Scalars['BigInt']>;
  fromTokenID_gt?: InputMaybe<Scalars['BigInt']>;
  fromTokenID_lt?: InputMaybe<Scalars['BigInt']>;
  fromTokenID_gte?: InputMaybe<Scalars['BigInt']>;
  fromTokenID_lte?: InputMaybe<Scalars['BigInt']>;
  fromTokenID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fromTokenID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  toTokenID?: InputMaybe<Scalars['BigInt']>;
  toTokenID_not?: InputMaybe<Scalars['BigInt']>;
  toTokenID_gt?: InputMaybe<Scalars['BigInt']>;
  toTokenID_lt?: InputMaybe<Scalars['BigInt']>;
  toTokenID_gte?: InputMaybe<Scalars['BigInt']>;
  toTokenID_lte?: InputMaybe<Scalars['BigInt']>;
  toTokenID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  toTokenID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ValueTransfer_orderBy =
  | 'id'
  | 'fromTokenID'
  | 'toTokenID'
  | 'value'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

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
  adminChanged: InContextSdkMethod<Query['adminChanged'], QueryadminChangedArgs, MeshContext>,
  /** null **/
  adminChangeds: InContextSdkMethod<Query['adminChangeds'], QueryadminChangedsArgs, MeshContext>,
  /** null **/
  beaconUpgraded: InContextSdkMethod<Query['beaconUpgraded'], QuerybeaconUpgradedArgs, MeshContext>,
  /** null **/
  beaconUpgradeds: InContextSdkMethod<Query['beaconUpgradeds'], QuerybeaconUpgradedsArgs, MeshContext>,
  /** null **/
  upgraded: InContextSdkMethod<Query['upgraded'], QueryupgradedArgs, MeshContext>,
  /** null **/
  upgradeds: InContextSdkMethod<Query['upgradeds'], QueryupgradedsArgs, MeshContext>,
  /** null **/
  hypercertMinterAdminChanged: InContextSdkMethod<Query['hypercertMinterAdminChanged'], QueryhypercertMinterAdminChangedArgs, MeshContext>,
  /** null **/
  hypercertMinterAdminChangeds: InContextSdkMethod<Query['hypercertMinterAdminChangeds'], QueryhypercertMinterAdminChangedsArgs, MeshContext>,
  /** null **/
  allowlistCreated: InContextSdkMethod<Query['allowlistCreated'], QueryallowlistCreatedArgs, MeshContext>,
  /** null **/
  allowlistCreateds: InContextSdkMethod<Query['allowlistCreateds'], QueryallowlistCreatedsArgs, MeshContext>,
  /** null **/
  approvalForAll: InContextSdkMethod<Query['approvalForAll'], QueryapprovalForAllArgs, MeshContext>,
  /** null **/
  approvalForAlls: InContextSdkMethod<Query['approvalForAlls'], QueryapprovalForAllsArgs, MeshContext>,
  /** null **/
  hypercertMinterBeaconUpgraded: InContextSdkMethod<Query['hypercertMinterBeaconUpgraded'], QueryhypercertMinterBeaconUpgradedArgs, MeshContext>,
  /** null **/
  hypercertMinterBeaconUpgradeds: InContextSdkMethod<Query['hypercertMinterBeaconUpgradeds'], QueryhypercertMinterBeaconUpgradedsArgs, MeshContext>,
  /** null **/
  claimStored: InContextSdkMethod<Query['claimStored'], QueryclaimStoredArgs, MeshContext>,
  /** null **/
  claimStoreds: InContextSdkMethod<Query['claimStoreds'], QueryclaimStoredsArgs, MeshContext>,
  /** null **/
  initialized: InContextSdkMethod<Query['initialized'], QueryinitializedArgs, MeshContext>,
  /** null **/
  initializeds: InContextSdkMethod<Query['initializeds'], QueryinitializedsArgs, MeshContext>,
  /** null **/
  leafClaimed: InContextSdkMethod<Query['leafClaimed'], QueryleafClaimedArgs, MeshContext>,
  /** null **/
  leafClaimeds: InContextSdkMethod<Query['leafClaimeds'], QueryleafClaimedsArgs, MeshContext>,
  /** null **/
  ownershipTransferred: InContextSdkMethod<Query['ownershipTransferred'], QueryownershipTransferredArgs, MeshContext>,
  /** null **/
  ownershipTransferreds: InContextSdkMethod<Query['ownershipTransferreds'], QueryownershipTransferredsArgs, MeshContext>,
  /** null **/
  transferBatch: InContextSdkMethod<Query['transferBatch'], QuerytransferBatchArgs, MeshContext>,
  /** null **/
  transferBatches: InContextSdkMethod<Query['transferBatches'], QuerytransferBatchesArgs, MeshContext>,
  /** null **/
  transferSingle: InContextSdkMethod<Query['transferSingle'], QuerytransferSingleArgs, MeshContext>,
  /** null **/
  transferSingles: InContextSdkMethod<Query['transferSingles'], QuerytransferSinglesArgs, MeshContext>,
  /** null **/
  uri: InContextSdkMethod<Query['uri'], QueryuriArgs, MeshContext>,
  /** null **/
  uris: InContextSdkMethod<Query['uris'], QueryurisArgs, MeshContext>,
  /** null **/
  hypercertMinterUpgraded: InContextSdkMethod<Query['hypercertMinterUpgraded'], QueryhypercertMinterUpgradedArgs, MeshContext>,
  /** null **/
  hypercertMinterUpgradeds: InContextSdkMethod<Query['hypercertMinterUpgradeds'], QueryhypercertMinterUpgradedsArgs, MeshContext>,
  /** null **/
  valueTransfer: InContextSdkMethod<Query['valueTransfer'], QueryvalueTransferArgs, MeshContext>,
  /** null **/
  valueTransfers: InContextSdkMethod<Query['valueTransfers'], QueryvalueTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  adminChanged: InContextSdkMethod<Subscription['adminChanged'], SubscriptionadminChangedArgs, MeshContext>,
  /** null **/
  adminChangeds: InContextSdkMethod<Subscription['adminChangeds'], SubscriptionadminChangedsArgs, MeshContext>,
  /** null **/
  beaconUpgraded: InContextSdkMethod<Subscription['beaconUpgraded'], SubscriptionbeaconUpgradedArgs, MeshContext>,
  /** null **/
  beaconUpgradeds: InContextSdkMethod<Subscription['beaconUpgradeds'], SubscriptionbeaconUpgradedsArgs, MeshContext>,
  /** null **/
  upgraded: InContextSdkMethod<Subscription['upgraded'], SubscriptionupgradedArgs, MeshContext>,
  /** null **/
  upgradeds: InContextSdkMethod<Subscription['upgradeds'], SubscriptionupgradedsArgs, MeshContext>,
  /** null **/
  hypercertMinterAdminChanged: InContextSdkMethod<Subscription['hypercertMinterAdminChanged'], SubscriptionhypercertMinterAdminChangedArgs, MeshContext>,
  /** null **/
  hypercertMinterAdminChangeds: InContextSdkMethod<Subscription['hypercertMinterAdminChangeds'], SubscriptionhypercertMinterAdminChangedsArgs, MeshContext>,
  /** null **/
  allowlistCreated: InContextSdkMethod<Subscription['allowlistCreated'], SubscriptionallowlistCreatedArgs, MeshContext>,
  /** null **/
  allowlistCreateds: InContextSdkMethod<Subscription['allowlistCreateds'], SubscriptionallowlistCreatedsArgs, MeshContext>,
  /** null **/
  approvalForAll: InContextSdkMethod<Subscription['approvalForAll'], SubscriptionapprovalForAllArgs, MeshContext>,
  /** null **/
  approvalForAlls: InContextSdkMethod<Subscription['approvalForAlls'], SubscriptionapprovalForAllsArgs, MeshContext>,
  /** null **/
  hypercertMinterBeaconUpgraded: InContextSdkMethod<Subscription['hypercertMinterBeaconUpgraded'], SubscriptionhypercertMinterBeaconUpgradedArgs, MeshContext>,
  /** null **/
  hypercertMinterBeaconUpgradeds: InContextSdkMethod<Subscription['hypercertMinterBeaconUpgradeds'], SubscriptionhypercertMinterBeaconUpgradedsArgs, MeshContext>,
  /** null **/
  claimStored: InContextSdkMethod<Subscription['claimStored'], SubscriptionclaimStoredArgs, MeshContext>,
  /** null **/
  claimStoreds: InContextSdkMethod<Subscription['claimStoreds'], SubscriptionclaimStoredsArgs, MeshContext>,
  /** null **/
  initialized: InContextSdkMethod<Subscription['initialized'], SubscriptioninitializedArgs, MeshContext>,
  /** null **/
  initializeds: InContextSdkMethod<Subscription['initializeds'], SubscriptioninitializedsArgs, MeshContext>,
  /** null **/
  leafClaimed: InContextSdkMethod<Subscription['leafClaimed'], SubscriptionleafClaimedArgs, MeshContext>,
  /** null **/
  leafClaimeds: InContextSdkMethod<Subscription['leafClaimeds'], SubscriptionleafClaimedsArgs, MeshContext>,
  /** null **/
  ownershipTransferred: InContextSdkMethod<Subscription['ownershipTransferred'], SubscriptionownershipTransferredArgs, MeshContext>,
  /** null **/
  ownershipTransferreds: InContextSdkMethod<Subscription['ownershipTransferreds'], SubscriptionownershipTransferredsArgs, MeshContext>,
  /** null **/
  transferBatch: InContextSdkMethod<Subscription['transferBatch'], SubscriptiontransferBatchArgs, MeshContext>,
  /** null **/
  transferBatches: InContextSdkMethod<Subscription['transferBatches'], SubscriptiontransferBatchesArgs, MeshContext>,
  /** null **/
  transferSingle: InContextSdkMethod<Subscription['transferSingle'], SubscriptiontransferSingleArgs, MeshContext>,
  /** null **/
  transferSingles: InContextSdkMethod<Subscription['transferSingles'], SubscriptiontransferSinglesArgs, MeshContext>,
  /** null **/
  uri: InContextSdkMethod<Subscription['uri'], SubscriptionuriArgs, MeshContext>,
  /** null **/
  uris: InContextSdkMethod<Subscription['uris'], SubscriptionurisArgs, MeshContext>,
  /** null **/
  hypercertMinterUpgraded: InContextSdkMethod<Subscription['hypercertMinterUpgraded'], SubscriptionhypercertMinterUpgradedArgs, MeshContext>,
  /** null **/
  hypercertMinterUpgradeds: InContextSdkMethod<Subscription['hypercertMinterUpgradeds'], SubscriptionhypercertMinterUpgradedsArgs, MeshContext>,
  /** null **/
  valueTransfer: InContextSdkMethod<Subscription['valueTransfer'], SubscriptionvalueTransferArgs, MeshContext>,
  /** null **/
  valueTransfers: InContextSdkMethod<Subscription['valueTransfers'], SubscriptionvalueTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["hypercerts-dev"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
