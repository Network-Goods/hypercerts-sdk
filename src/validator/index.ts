import Ajv from "ajv";
import metaData from "../resources/schema/metadata.json" assert { type: "json" };
import claimData from "../resources/schema/claimdata.json" assert { type: "json" };

import { HypercertMetadata } from "../types/metadata.js";
import { HypercertClaimdata } from "../types/claimdata.js";

const ajv = new Ajv.default(); // options can be passed, e.g. {allErrors: true}
ajv.addSchema(metaData, "metaData");
ajv.addSchema(claimData, "claimData");

// TODO error logging and handling
const validateMetaData = (data: HypercertMetadata) => {
  let validate = ajv.getSchema<HypercertMetadata>("metaData");
  if (!validate) {
    return false;
  }

  if (validate(data)) {
    return true;
  } else {
    for (const error in validate.errors) {
      console.log("Error while validation meta data: ", error);
    }
    return false;
  }
};

const validateClaimData = (data: HypercertClaimdata) => {
  let validate = ajv.getSchema<HypercertClaimdata>("claimData");
  if (!validate) {
    return false;
  }

  if (validate(data)) {
    return true;
  } else {
    console.log(validate.errors);
    for (const error in validate.errors) {
      console.log("Error while validating claim data: ", error);
    }
    return false;
  }
};

export { validateMetaData, validateClaimData };
