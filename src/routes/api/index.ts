import { Router } from 'express';
import { userRouter } from './userRoutes.js';
import { thoughtRouter } from './thoughtsRoutes.js';
import { reactionRouter } from './reactionRoutes.js';

const router = Router();

router.use('/user', userRouter);
router.use('/thought', thoughtRouter);
router.use('/reaction', reactionRouter);

export default router;
