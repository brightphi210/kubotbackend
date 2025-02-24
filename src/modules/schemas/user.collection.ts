import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/Iuser";

const UserSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true, unique: true },
    level: { type: Number, required: true, default: 0 },
    balance: { type: Number, required: true, default: 0 },
    walletAddress: { type: String, unique: true },
    referal: {
      code: { type: String, unique: true },
      count: { type: Number, default: 0 },
    },
    isBlocked: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const User = model<IUser>("User", UserSchema);

export default User;
