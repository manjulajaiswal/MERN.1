import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import productRouters from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // allows us to accept json data in the req.body

app.use("/api/products",productRouters); // everything with only / will be prefixed by this /api/products 

app.listen(PORT, () => {
    connectDB();
 console.log("Server started at http://localhost:" + PORT);
});


