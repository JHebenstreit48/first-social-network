import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { Users } from "../models/index.js";

export const numberOfUsers = async () => {
  const numberOfUsers = await Users.aggregate().count("userCount");
  return numberOfUsers;
};

export const reactions = async (userId: string) =>
  Users.aggregate([
    {
      $match: {
        _id: new ObjectId(userId),
      },
    },
  ]);

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await Users.find();

    const usersObj = {
      users,
      numberOfUsers: await numberOfUsers(),
    };

    res.json(usersObj);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await Users.findById(userId);
    if (userId) {
      res.json({
        user,
        grade: await userId,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await Users.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await Users.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: "No such user exists" });
    }

    // Update user fields
    Object.assign(user, req.body);

    // Save the updated user instance
    const updatedUser = await user.save();
    return res.json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await Users.findOneAndDelete({ _id: req.params.userId });

    if (!user) {
      return res.status(404).json({ message: "No such user exists" });
    }

    return res.json({ message: "User successfully deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const addFriend = async (req: Request, res: Response) => {
  try {
    const friend = await Users.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body.friendId } },
      { runValidators: true, new: true }
    );

    if (!friend) {
      return res.status(404).json({ message: "No friend found :(" });
    }

    return res.json();
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const removeFriend = async (req: Request, res: Response) => {
  try {
    const friend = await Users.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.body.friendId } },
      { runValidators: true, new: true }
    );

    if (!friend) {
      return res.status(404).json({ message: "Friend Removed :(" });
    }

    return res.json(friend);
  } catch (err) {
    return res.status(500).json(err);
  }
};
