const assert = require("../src/core/assert/assert.js");
var Product = require("../src/core/product/product.js");

var prod = new Product(1234, "Mouse", 34.85);

describe("Testing of product", () => {
  it("Testing toJson", () => {
    let mock = {
      code: 1234,
      name: "Mouse",
      price: 34.85,
    };
    expect(prod.toJson()).toStrictEqual(mock);
  });

  it("Testing toJson is not equal ", () => {
    let mock = {
      code: 12345,
      name: "Mouse",
      price: 34.85,
    };
    expect(!assert(prod.toJson() === mock));
  });
});
