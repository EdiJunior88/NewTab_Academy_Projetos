const assert = require("../core/assert/assert.js");
const http = require("http");

http.request("http://localhost:3000", (res) => {
  const chunks = [];
  res.on("data", (chunk) => chunks.push(chunk));
  res.on("end", () => {
    const body = chunks.join("");
    console.log("Integration test on localhost:3000 === Server On");
    assert(body === 'Server On.');
  });
}).end();
