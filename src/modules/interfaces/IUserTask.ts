import { Document, Types } from "mongoose";

export interface IUserTask extends Document {
   user: Types.ObjectId;
   task: Types.ObjectId;
   completedAt: Date;
   verified: boolean;
   verifiedAt: Date;
   rewardEarned: number;
}