import { Document, Types } from "mongoose";

export interface IMiningRound extends Document {
  startTime: Date;
  endTime: Date;
  user: Types.ObjectId;
  settled: boolean;
  settledAt: Date;
}
