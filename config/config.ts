import mongoose, { Connection } from "mongoose";
export const config: Connection = mongoose.createConnection('mongodb://localhost/new_db');
console.log("Connected")