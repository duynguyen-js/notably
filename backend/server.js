import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from "./mongodb/connect.js";
import router from './routes/routes.js'

const app = express()

dotenv.config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// routes
app.use('/api/flashcards', router)

app.listen(process.env.PORT, async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    console.log("Server is listening for requests on", process.env.PORT)
  } catch (error) {
    console.log(error);
  }
})