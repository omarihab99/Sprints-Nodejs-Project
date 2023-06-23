const createHash = require("crypto");
const users = require("../models/userModel");
const userLoginController = () => {};

const userRegisterController = (req, res) => {
  const hash = (password) =>
    createHash("sha256").update(password).digest("hex");
  const { email, password, _ } = req.body;
  const hashedPassword = hash(password);
  users.push({
    email,
    password: hashedPassword,
  });
  res.send("Registered Successfully");
};
