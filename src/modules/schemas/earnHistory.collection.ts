import { Schema, model } from "mongoose";
import { IEarnHistory } from "../interfaces/IEarnHistory";

const EarnHistorySchema: Schema<IEarnHistory> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

const EarnHistory = model<IEarnHistory>("EarnHistory", EarnHistorySchema);

export default EarnHistory;
