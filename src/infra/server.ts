import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors'
import {AppError} from "../lib/model/AppError";
import {appRoutes} from "./http/api";

export const app = express();
app.use(cors());
app.use(express.json());
app.use(appRoutes);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  console.log(error);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server Error'
  });
});
