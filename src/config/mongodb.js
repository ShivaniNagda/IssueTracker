// Import necessary modules
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config(); 

// Ensure the DB_URL is being read correctly from the .env file
const url = process.env.DB_URL || URL ;
if (!url) {
  console.log("DB_URL is not defined in the .env file.");
}

let client;

export const connectToMongoDB = async () => {
  try {
    // Use proper options for MongoDB client
    client = await MongoClient.connect(url);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Optional: Exit process if the connection fails
  }
};

export const getDB = () => {
  if (!client) {
   console.log("MongoDB client is not connected yet.");
  }else{
  return client.db(); 
  }// Return the connected database
};

export const closeMongoDB = async () => {
  if (client) {
    await client.close();
    console.log("MongoDB connection closed");
  }
};
