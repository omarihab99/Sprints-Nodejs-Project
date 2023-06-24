const userRegisterService = require('../services/userServices');
const users = require("../models/userModel");
const userLoginController = () => {};
const userRegisterController = (req, res) => {
  const { email, password, _ } = req.body;
  userRegisterService(email, password);
  res.send("Registered Successfully");
};

module.exports = {userRegisterController, userLoginController};