const assert = require("assert");
const http = require("http");

describe("Integrations Tests", () => {
  it("Integration test on localhost:3000 === Server On", async () => {
    let req = http.get("http://localhost:3000");
    expect(assert(req));
  });

  it("Integration test on localhost:3000 !== Server On", async () => {
    let req = http.get("http://localhost:3000");
    expect(assert(req.body !== "'Server On"));
  });
});
