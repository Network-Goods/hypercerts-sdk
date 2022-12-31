import Ajv from "ajv";
import metaData from "../../resources/schema/metadata.json";
import claimData from "../../resources/schema/claimdata.json";

import { HypercertMetadata } from "../../types/metadata";
import { HypercertClaimdata } from "../../types/claimdata";

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
ajv.addSchema(metaData, "metaData");
ajv.addSchema(claimData, "claimData");

// TODO error logging and handling
const validateMetaData = (data: HypercertMetadata) => {
  let validate = ajv.getSchema("metaData");
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

const validateClaimData = (data: HypercertClaimdata) => {
  let validate = ajv.getSchema("claimData");
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

export { validateMetaData, validateClaimData };
