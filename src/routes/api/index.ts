import { Router } from 'express';
import { userRouter } from './userRoutes.js';
import { thoughtsRouter } from './thoughtsRoutes.js';
import { reactionsRouter } from './reactionRoutes.js';

const router = Router();

router.use('/user', userRouter);
router.use('/thought', thoughtsRouter);
router.use('/reaction', reactionsRouter);

export default router;
