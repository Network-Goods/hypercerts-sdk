import { buildYup } from "schema-to-yup";
import { schema, config } from "../resources/schema/claim";
import example from "../resources/examples/claim.json";
import log from "loglevel";

const yupSchema = buildYup(schema, config);

const exampleData = example;

log.setLevel(log.levels.INFO);

const validateClaim = async (data: any) => {
  const valid = await yupSchema.isValid(data);

  log.warn({ valid });
};

validateClaim(exampleData);
