import Ajv from "ajv";
import metaData from "../resources/schema/metadata.json" assert { type: "json" };
import claimData from "../resources/schema/claimdata.json" assert { type: "json" };

import { HypercertMetadata } from "../types/metadata.js";
import { HypercertClaimdata } from "../types/claimdata.js";

type Result = {
  valid: boolean;
  errors: string[];
};

const ajv = new Ajv.default(); // options can be passed, e.g. {allErrors: true}
ajv.addSchema(metaData, "metaData");
ajv.addSchema(claimData, "claimData");

// TODO error logging and handling
const validateMetaData = (data: HypercertMetadata): Result => {
  let validate = ajv.getSchema<HypercertMetadata>("metaData");
  if (!validate) {
    return { valid: false, errors: [] };
  }

  if (validate(data)) {
    return { valid: true, errors: [] };
  } else {
    return {
      valid: false,
      errors: (validate.errors || []).filter((e) => e.message !== undefined).map((e) => e.message as string),
    };
  }
};

const validateClaimData = (data: HypercertClaimdata): Result => {
  let validate = ajv.getSchema<HypercertClaimdata>("claimData");
  if (!validate) {
    return { valid: false, errors: [] };
  }

  if (validate(data)) {
    return { valid: true, errors: [] };
  } else {
    return {
      valid: false,
      errors: (validate.errors || []).filter((e) => e.message !== undefined).map((e) => e.message as string),
    };
  }
};

export { validateMetaData, validateClaimData };
