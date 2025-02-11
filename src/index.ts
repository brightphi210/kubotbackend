import express, { NextFunction, Request, Response } from "express";
const app = express();
import { ENVIRONMENT } from "./common/config/environment";
import cors from "cors";
import { connectDb } from "./common/config/database";
import dotenv from "dotenv";

dotenv.config();

// App Security Configurations
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.disable("x-powered-by");

// Routes

// Welcome Message
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to the Kubot Mini App API",
  });
});

// status check
app.get("*", (req: Request, res: Response) => {
  res.send({
    Time: new Date(),
    status: "running",
  });
});

// error check
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    status: false,
    message: "An unexpected error occurred",
    error: err.message,
  });
});

app.listen(ENVIRONMENT.APP.PORT, () => {
  console.log(
    `${ENVIRONMENT.APP.NAME} Running on http://localhost:${ENVIRONMENT.APP.PORT}`
  );

  connectDb();
});
