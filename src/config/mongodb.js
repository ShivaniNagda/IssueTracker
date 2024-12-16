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

export const connectToMongoDB =() => {
  MongoClient.connect(url)
    .then((clientInstance) => {
      client = clientInstance;
      console.log("Mongodb is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDB = () => {
  if (!client) {
   console.log("MongoDB client is not connected yet.");
  }
  return client.db(); 
};

