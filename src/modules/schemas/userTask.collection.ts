import { Schema, model } from "mongoose";
import { IUserTask } from "../interfaces/IUserTask";

const UserTaskSchema: Schema<IUserTask> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    task: { type: Schema.Types.ObjectId, ref: "Task", required: true },
    completedAt: { type: Date, required: true },
    verified: { type: Boolean, required: true, default: false },
    verifiedAt: { type: Date, required: false },
    rewardEarned: { type: Number, required: true },
  },
  { timestamps: true }
);

const UserTask = model<IUserTask>("UserTask", UserTaskSchema);

export default UserTask;
