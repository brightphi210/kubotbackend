import { Schema, model } from "mongoose";
import { IMiningRound } from "../interfaces/IMiningRound";

const MiningRoundSchema: Schema<IMiningRound> = new Schema(
  {
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    settled: { type: Boolean, required: true, default: false },
    settledAt: { type: Date, required: false },
  },
  { timestamps: true }
);

const MiningRound = model<IMiningRound>("MiningRound", MiningRoundSchema);

export default MiningRound;
