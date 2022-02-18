const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  const PASSWORD = process.env.PASSWORD;
  const DB_NAME = process.env.DB_NAME;
  const CONNECTION_STRING = `mongodb+srv://admin:${PASSWORD}@coded.j0csj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

  const conn = await mongoose.connect(CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`mongo connected: ${conn.connection.host}`);
};
module.exports = connectDB;
