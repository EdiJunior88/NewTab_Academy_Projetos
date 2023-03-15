class Product {
  constructor(code, name, price) {
    this.code = code;
    this.name = name;
    this.price = price;
  }

  getCode = () => this.code;
  getName = () => this.name;
  getPrice = () => this.price;

  setCode = (code) => (this.code = code);
  setName = (name) => (this.name = name);
  setPrice = (price) => (this.price = price);

  toJson() {
    return {
      code: this.code,
      name: this.name,
      price: this.price,
    };
  }

  fromJson(json) {
    return new Product(
      (this.code = json.code),
      (this.name = json.name),
      (this.price = json.price)
    );
  }
}

module.exports = Product;
