import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "colors";
import connectDB from "./database/connection.js";
import morgan from "morgan";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middlewares

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

// Start Server when Database connected successfully
connectDB()
    .then(() => {
        try {
            app.listen(port, () =>
                console.log("Server is listening on port".underline.cyan)
            );
        } catch (err) {
            console.log("Can't connect to server. Error: ", err);
        }
    })
    .catch((err) => {
        console.log("Invalid Connection");
    });
