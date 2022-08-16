const { describe, it } = require("mocha");
const assert = require("../src/core/assert/assert.js");
const http = require("http");

describe("Integrations Tests", () => {
  it("Integration test on localhost:3000 === Server On", () => {
    http
      .request("http://localhost:3000", (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          const body = chunks.join("");
          assert(body === "Server On.");
        });
      })
      .end();
  });

  it("Integration test on localhost:3000 !== Server On", () => {
    http
      .request("http://localhost:3000", (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          const body = chunks.join("");
          assert(body !== "Server On.");
        });
      })
      .end();
  });
});
