const createHash = require('crypto');
const users = require('../models/userModel');
const logger = require('../logger');
const userLogger = logger.userLogger;

const userLoginService = () => {}
const userRegisterService = (email, password) => {
  const hash = (password) =>
    createHash("sha256").update(password).digest("hex");
  try{
    const hashedPassword = hash(password);
    users.push({
      email,
      password: hashedPassword,
    });
    userLogger.userRegisterSuccess();
  }
  catch(error){
    userLogger.userRegisterFailed();
  }
  
}
module.exports = {userRegisterService, userLoginService};