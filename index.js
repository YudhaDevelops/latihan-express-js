import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import Users from "./models/UserModels.js";
import router from "./routes/UserRoute.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
    // await Users.sync();
} catch (error) {
    console.error(error.message);
}

app.use(cors({
    credentials: true
    // origin:'http://localhost:3000'
}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () =>
    console.log('Server runnning at port 5000')
);