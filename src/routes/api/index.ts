import { Router } from 'express';
import { userRouter } from './userRoutes.js';
import { thoughtsRouter } from './thoughtsRoutes.js';

const router = Router();

router.use('/user', userRouter);
router.use('/thought', thoughtsRouter);

export default router;
