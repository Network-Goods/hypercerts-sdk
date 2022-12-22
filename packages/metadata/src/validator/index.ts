import Ajv from "ajv";
import metadata from "../../resources/schema/metadata.json";
import claimdata from "../../resources/schema/claimdata.json";

import { HypercertMetadata } from "../../types/metadata";
import { HypercertClaimdata } from "../../types/claimdata";

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
ajv.addSchema(metadata, "metadata");
ajv.addSchema(claimdata, "claimdata");

// TODO error logging and handling
const metadataValidator = (data: HypercertMetadata) => {
  let validate = ajv.getSchema("metadata");
  if (!validate) {
    return false;
  }

  if (validate(data)) {
    return true;
  } else {
    for (const error in validate.errors) {
      console.log("Error: ", error);
    }
    return false;
  }
};

const claimdataValidator = (data: HypercertClaimdata) => {
  let validate = ajv.getSchema("claimdata");
  if (!validate) {
    return false;
  }

  if (validate(data)) {
    return true;
  } else {
    for (const error in validate.errors) {
      console.log("Error: ", error);
    }
    return false;
  }
};

export { metadataValidator, claimdataValidator };
