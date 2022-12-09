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
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("Check connection", () => {
    it("checking if client loads", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = yield (0, src_1.connectIPFS)();
        chai_1.assert.typeOf(client, "IPFS");
        const { cid } = yield client.add("Hello");
        console.log("CID: ", cid);
        (0, chai_1.expect)(cid).to.not.be.empty;
        (0, chai_1.expect)(cid).to.not.be.undefined;
    }));
});
//# sourceMappingURL=client.test.js.map