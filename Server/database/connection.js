import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.set('strictQuery', false)
    const mongo = await MongoMemoryServer.create();
    const database = await mongoose.connect(mongo.getUri());
  
    return database;
};

export default connectDB;
