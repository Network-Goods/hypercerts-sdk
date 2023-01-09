/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  setupFiles: ["./test/setup-tests.ts"],
  preset: "ts-jest/presets/default-esm", // or other ESM presets,
  verbose: false,
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};
