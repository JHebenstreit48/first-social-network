import { Router } from 'express';
const router = Router();
import {
    createReaction,
    removeReaction,
} from '../../controllers/thoughtsController.js';

//api/reaction
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

export { router as reactionsRouter };
