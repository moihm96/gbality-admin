import express from "express";
import productRouter from "./router/productRouter";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();

connectDB();

const server = express();

server.use("/api/", productRouter);

export default server;
