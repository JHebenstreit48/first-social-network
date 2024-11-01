import { Router } from 'express';
const router = Router();
import {
    findThoughtById,
    getAllThoughts,
    createThought,
    updateThought,
    createReaction,
    removeReaction,
} from '../../controllers/thoughtsController.js';

// /api/thought
router.route('/').get(getAllThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(findThoughtById).put(updateThought);

router.route('/:thoughtId/reaction').post(createReaction);

router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

export { router as thoughtsRouter };
