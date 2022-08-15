function assert(value, description) {
  console.log(description);

  if (!value) {
    //throw new Error("Invalid value");
    console.log("Invalid value");
    return false;
  } else {
    console.log("Sucess!");
    return true;
  }
}

module.exports = assert;
