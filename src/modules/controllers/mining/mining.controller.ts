import MiningRound from "../../schemas/miningRound.collection";
import { Response, Request } from "express";

export const miningController = {
  checkIfUserCanMin: async (req: Request, res: Response) => {
    // check if user has an active mining section
  },

  startMining: async (req: Request, res: Response) => {
    // start a mining round for the user
  },

  settleMiningRounds: async (req: Request, res: Response) => {
    // this will be run in a cron job to automatically settle mining sessions
  },
};
