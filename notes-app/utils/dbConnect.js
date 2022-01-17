import mongoose from "mongoose";
const dotenv = require("dotenv");
dotenv.config();

const connection = {};

async function dbConnect() {
  if (connection.iscConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_URI);

  connection.iscConnected = db.connections[0].readyState;
  console.log(connection.iscConnected);
}

export default dbConnect;
