import { Document, Types } from "mongoose";



export interface ITask extends Document {
   name: string;
   description: string;
   reward: number;
   link: string;
   completedBy: Types.ObjectId[];
}