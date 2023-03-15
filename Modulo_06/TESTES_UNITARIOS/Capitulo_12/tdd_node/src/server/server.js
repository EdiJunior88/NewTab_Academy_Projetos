const http = require("http");
const assert = require("../core/assert/assert.js");

http
  .createServer((req, res) => {
    res.end("Server On.");
  })
  .listen(process.env.PORT || 3000);
