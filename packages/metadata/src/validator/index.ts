import Ajv from "ajv";
import metadata from "../../resources/schema/metadata.json";
import claimdata from "../../resources/schema/claimdata.json";

import { HypercertClaimdata, HypercertMetadata } from "../../types/metadata";

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
ajv.addSchema(metadata, "metadata.json");
ajv.addSchema(claimdata, "claimdata.json");

const metadataValidator = (data: HypercertMetadata) => {
  return ajv.validate("metadata.json", data);
};

const claimdataValidator = (data: HypercertClaimdata) => {
  return ajv.validate("claimdata.json", data);
};

export { metadataValidator, claimdataValidator };
