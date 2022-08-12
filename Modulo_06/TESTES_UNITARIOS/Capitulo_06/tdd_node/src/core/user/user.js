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
      return true;
    } else {
      return false;
    }
  }
}

module.exports = User;
