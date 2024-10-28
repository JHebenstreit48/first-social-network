import { Router } from 'express';
const router = Router();
import {
    findAllThoughtsById,
    getAllThoughts,
    createThought,
    updateThought,
} from '../../controllers/thoughtsController.js';

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:userId
router.route('/:userId').get(findAllThoughtsById).put(updateThought);

export { router as thoughtsRouter };
