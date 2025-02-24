import User from "../../schemas/user.collection";
import { Request, Response } from "express";
require("dotenv").config();
import jwt from "jsonwebtoken";
const JWT_SECRET =  process.env.JWT_SECRET;

export const authController = {
  authUser: async (req: Request, res: Response) => {
    try {
      const { username } = req.body;

      if (!username) {
        return res
          .status(422)
          .json({ status: false, message: "Username is Required" });
      }

      const userExists = await User.findOne({
        username: String(username).toLowerCase(),
      });

      if (!userExists) {
        const newUser = await User.create({
          username: String(username).toLowerCase(),
        });

        const token = jwt.sign({ id: newUser._id }, JWT_SECRET as string, {
          expiresIn: "30d",
        });

        res.status(200).json({
          status: true,
          message: "Authenticated Successfully",
          token,
        });

        return;
      }

      const token = jwt.sign({ id: userExists._id }, JWT_SECRET as string, {
        expiresIn: "30d",
      });

      res.status(200).json({
        status: true,
        message: "Authenticated Successfully",
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  },
};
