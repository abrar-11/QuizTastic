import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "colors";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();


// Middlewares

app.use(express.json());
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')

app.listen(port, () =>
    console.log("Server is listening on port".underline.cyan)
);
