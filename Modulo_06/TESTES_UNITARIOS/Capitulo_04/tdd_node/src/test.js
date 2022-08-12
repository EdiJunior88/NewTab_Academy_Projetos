function assert(value) {
  if (!value) {
    throw new Error("Invalid value");
  } else {
    console.log("Sucess!");
  }
}

function sqr(number) {
  return number * number;
}

class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  getName = () => this.name;
  getPassword = () => this.password;

  setName = (name) => (this.name = name);
  setPassword = (password) => (this.password = password);

  auth(name, password) {
    if (name === this.name && password === this.password) {
      console.log("Authenticated");
      return true;
    } else {
      console.log("Login invalid");
      return false;
    }
  }
}

console.log("Testing string");
assert("Pessoa" === "Pessoa");

console.log("Testing sqr");
assert(sqr(3) === 9);

console.log("Testing auth");
var admin = new User("admin", "123456");
assert(admin.auth('admi', '123456'));
