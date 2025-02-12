import { Document } from "mongoose";

export interface IUser extends Document {
   username: string;
   level: number;
   balance: number;
   walletAddress: string;
   referal:{
    code: string;
    count: number;
   };
   isBlocked: boolean;
}
