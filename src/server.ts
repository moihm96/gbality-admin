import express from "express";
import productRoutes from "./routes/productRoutes";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db";
import { errorHandler, notFound } from "./middleware/errorMiddleware";
import userRoutes from "./routes/userRoutes";
import cors, { CorsOptions } from "cors";

dotenv.config();

connectDB();

const server = express();

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};
server.use(cors(corsOptions));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use("/api/products", productRoutes);
server.use("/api/users", userRoutes);

server.use("/api/products", productRoutes);

server.use(notFound);
server.use(errorHandler);

export default server;
