const assert = require("assert");
var User = require("../src/core/user/user.js");

var admin = new User("admin", "123456");

describe("Testing of authentication", () => {
  it("Testing invalid user name", () => {
    expect(assert(!admin.auth("admi", "123456")));
  });

  it("Testing invalid user password", () => {
    expect(assert(!admin.auth("admin", "1234567")));
  });

  it("Testing valid credentials", () => {
    expect(assert(admin.auth("admin", "123456")));
  });

  it("Testing getName", () => {
    expect(admin.getName()).toBe("admin");
  });

  it("Testing getPassword", () => {
    expect(admin.getPassword()).toBe("123456");
  });

  it("Testing getName", () => {
    expect(admin).toBe(admin);
  });
});
