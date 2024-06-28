const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id },"sai", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
