import { Request, Response } from "express";
import { Thoughts, Users } from "../models/index.js";

export const getAllThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thoughts.find();

    res.json(thoughts);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export const findThoughtById = async (req: Request, res: Response) => {
  try {
    const thoughts = await Thoughts.findOne({ _id: req.params.thoughtId });

    if (!thoughts) {
      return res.status(404).json({ message: "No thoughts found :(" });
    }

    return res.json(thoughts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const createThought = async (req: Request, res: Response) => {
  try {
    const thoughts = await Thoughts.create(req.body);
    const user = await Users.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { thoughts: thoughts._id } },
      { new: true }
    );

 if (!user) {
      return res.status(404).json({ message: "No user found :(" });
 }
    return res.json(thoughts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const updateThought = async (req: Request, res: Response) => {
  try {
    const thoughts = await Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    return res.json(thoughts); // Add this line to return the updated thoughts
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const createReaction = async (req: Request, res: Response) => {
  console.log("You are adding an reaction");
  console.log(req.body);
  try {
    const reaction = await Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );

    if (!reaction) {
      return res.status(404).json({ message: "No reaction found :(" });
    }

    return res.json(reaction);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const removeReaction = async (req: Request, res: Response) => {
  try {
    const user = await Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "Reaction Removed :(" });
    }

    return res.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};
