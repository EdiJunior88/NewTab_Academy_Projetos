const { describe, it } = require("mocha");
const assert = require("assert");
const sqr = require("../src/core/sqr/sqr.js");

describe("Testing of types and values", () => {
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
