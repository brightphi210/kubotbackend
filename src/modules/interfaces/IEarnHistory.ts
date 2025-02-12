import { Document, Types } from "mongoose";

export interface IEarnHistory extends Document {
   user: Types.ObjectId;
   amount: number;
   type: string;
}