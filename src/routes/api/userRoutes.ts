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

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/students/:userId
router.route('/:userId').get(getUserById).delete(deleteUser);

// /api/users/:userId/update
router.route('/:userId/update').put(updateUser);

// /api/students/:userID/friends/
router.route('/:userId/friends').post(addFriend).delete(removeFriend);



export { router as userRouter};
