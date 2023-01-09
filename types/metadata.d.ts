/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Claim data for hypercert. ERC1155 Metadata compliant
 */
export interface HypercertMetadata {
  /**
   * Identifies the asset to which this token represents
   */
  name: string;
  /**
   * Describes the asset to which this token represents
   */
  description: string;
  /**
   * A URI pointing to a resource with mime type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.
   */
  image: string;
  /**
   * Describes the asset to which this token represents
   */
  ref?: string;
  /**
   * A CID pointer to the merke tree proof json on ipfs
   */
  allowList?: string;
  properties: HypercertClaimdata;
}
