const dbConexion = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/testEmail";

const connectDB = () => {
  return dbConexion
    .connect(db)
    .then(() => console.log("conect"))
    .catch((error) => {
      console.log("error", error);
    });
};

module.exports = { connectDB };
