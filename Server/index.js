import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "colors";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.listen(port, () =>
    console.log("Server is listening on port".underline.cyan)
);
