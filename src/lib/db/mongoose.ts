import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { connection: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.connection) {
    return cached.connection;
  }

  if (!MONGODB_URI)
    throw new Error(
      "MONGODB_URI is missing in .env file. Please add it and try again."
    );

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "imaginify",
      bufferCommands: false,
    });
  }

  cached.connection = await cached.promise;
  return cached.connection;
};
