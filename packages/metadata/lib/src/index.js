"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_to_yup_1 = require("schema-to-yup");
const claim_1 = require("../resources/schema/claim");
const claim_json_1 = __importDefault(require("../resources/examples/claim.json"));
const loglevel_1 = __importDefault(require("loglevel"));
const yupSchema = (0, schema_to_yup_1.buildYup)(claim_1.schema, claim_1.config);
const exampleData = claim_json_1.default;
loglevel_1.default.setLevel(loglevel_1.default.levels.INFO);
const validateClaim = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const valid = yield yupSchema.isValid(data);
    loglevel_1.default.warn({ valid });
});
validateClaim(exampleData);
//# sourceMappingURL=index.js.map