const dotenv = require("dotenv");
const { MONGO_URI_KEY } = require("./contants");

dotenv.config();

const MONGO_URI = process.env[MONGO_URI_KEY];

module.exports = {
  MONGO_URI,
};
