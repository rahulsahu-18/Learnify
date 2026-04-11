import express from 'express'
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from './utils/db.js';
import userRouter from './routes/userRoutes.js';

dotenv.config({});


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use("/api/v1/user", userRouter);
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    connectDB();
    console.log(`server started at ${PORT}`);
})