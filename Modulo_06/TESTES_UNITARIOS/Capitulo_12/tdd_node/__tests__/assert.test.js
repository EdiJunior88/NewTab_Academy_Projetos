const assert = require("../src/core/assert/assert.js");
const sqr = require("../src/core/sqr/sqr.js");
const sum = require("../src/core/sum/sum");

describe("Testing of assert", () => {
  it("Testing assert sum", () => {
    expect(assert(sum(1, 2) === 3)).toEqual(true);
  });

  it("Testing assert string", () => {
    expect(assert("Pessoa" === "Pessoa")).toEqual(true);
  });

  it("Testing assert sqr", () => {
    expect(assert(sqr(3) === 9)).toEqual(true);
  });
});
