import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from '../../controllers/usersController.js';

// /api/user
router.route('/').get(getAllUsers).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getUserById).delete(deleteUser);

// /api/user/:userId/update
router.route('/:userId/update').put(updateUser);

// /api/user/:userId/friends/
router.route('/:userId/friend/:friendId').post(addFriend).delete(removeFriend);

export { router as userRouter};
