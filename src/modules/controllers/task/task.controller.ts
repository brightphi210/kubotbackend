import Task from "../../schemas/task.collection";
import { Request, Response } from "express";

export const taskController = {
  getAllTasks: async (req: Request, res: Response) => {
    // get all the availabe tasks
  },

  getCompletedTasks: async (req: Request, res: Response) => {
    // get all the tasks completed by user and has been verified by the cron job
  },

  completeTask: async (req: Request, res: Response) => {
    // a user to mask task as completed
  },

  confirmTaskCompletion: async (req: Request, res: Response) => {
    // this will tun in a cron job and confirm task completion automatically,
    // 10 minutes after user has comleted the tas
  },

  
};
