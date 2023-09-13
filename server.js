import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoute.js";

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Octalogic Backend</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
