const assert = require("assert");
const sqr = require("../src/core/sqr/sqr.js");
const sum = require("../src/core/sum/sum.js");

describe("Testing of types and values", () => {
  it("Testing sum", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("Testing string", () => {
    assert("Pessoa" === "Pessoa");
  });

  it("Testing sqr", () => {
    assert(sqr(3) === 9);
  });

  it("Testing sqr 2", () => {
    assert(sqr(5) === 25);
  });

  it("Testing double", () => {
    assert(0.0 !== 1.0);
  });
});
