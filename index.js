import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routers/userRouter.js"; 
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";
import cartRouter from "./routers/cartRouter.js";
import User from "./models/user.js"; // adjust the path if needed



dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

const connectionString = process.env.MONGO_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });


app.use(async (req, res, next) => {
  if (req.method === "OPTIONS") return next();

  const value = req.header("Authorization");
  if (!value) return next();

  const token = value.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach extra DB info to req.user if found
    let userFromDB = null;
    if (decoded.email) {
      userFromDB = await User.findOne({ email: decoded.email }).lean();
    }
    if (userFromDB) {
      req.user = {
        ...decoded,
        _id: userFromDB._id,
        role: userFromDB.role,
        isBlock: userFromDB.isBlock,
        isEmailVerified: userFromDB.isEmailVerified,
        image: userFromDB.image,
      };
    } else {
      req.user = decoded;
    }
    return next();
  } catch (err) {
    console.error("JWT verification error:", err.message);
    return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
  }
});


app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/cart", cartRouter);

app.listen(5000, () => {
  console.log("server started");
});