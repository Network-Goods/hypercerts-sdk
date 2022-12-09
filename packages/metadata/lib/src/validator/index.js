"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.claimdataValidator = exports.metadataValidator = void 0;
const ajv_1 = __importDefault(require("ajv"));
const metadata_json_1 = __importDefault(require("../../resources/schema/metadata.json"));
const claimdata_json_1 = __importDefault(require("../../resources/schema/claimdata.json"));
const ajv = new ajv_1.default();
ajv.addSchema(metadata_json_1.default, "metadata.json");
ajv.addSchema(claimdata_json_1.default, "claimdata.json");
const metadataValidator = (data) => {
    return ajv.validate("metadata.json", data);
};
exports.metadataValidator = metadataValidator;
const claimdataValidator = (data) => {
    return ajv.validate("claimdata.json", data);
};
exports.claimdataValidator = claimdataValidator;
//# sourceMappingURL=index.js.map