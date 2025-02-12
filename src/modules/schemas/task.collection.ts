import { Schema, model } from "mongoose";
import { ITask } from "../interfaces/Itask";

const TaskSchema: Schema<ITask> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    reward: { type: Number, required: true },
    link: { type: String, required: true },
    completedBy: { type: [Schema.Types.ObjectId], ref: "User", required: false },
  },
  { timestamps: true }
);

const Task = model<ITask>("Task", TaskSchema);

export default Task;
