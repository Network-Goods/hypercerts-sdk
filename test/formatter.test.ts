import { expect } from "chai";
import { formatHypercertData } from "../src/index.js";

type TestDataType = Parameters<typeof formatHypercertData>[0];
const testData: Partial<TestDataType> = {
  name: "test name",
  description: "test description",
  image: "some test image",
  contributors: ["0x111", "0x22"],
  external_url: "https://example.com",
  impactScope: ["test impact scope"],
  impactTimeframeEnd: new Date(),
  impactTimeframeStart: new Date(),
  workScope: ["test work scope"],
  workTimeframeStart: new Date(),
  workTimeframeEnd: new Date(),
  properties: [{ trait_type: "test trait type", value: "aaa" }],
  rights: ["test right 1", "test right 2"],
  version: "0.0.1",
};

describe("Format Hypercert Data test", () => {
  it("checks correct metadata", () => {
    const { valid, errors } = formatHypercertData(testData as TestDataType);
    expect(valid).to.be.true;
    expect(Object.keys(errors).length).to.eq(0);
  });

  it("returns null on incorrect data", () => {
    const { name, ...rest } = testData;
    const { valid, errors, data } = formatHypercertData(rest as TestDataType);
    expect(valid).to.be.false;
    expect(Object.keys(errors).length).to.eq(1);
    expect(data).to.be.null;
  });
});
