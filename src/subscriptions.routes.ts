import { Router } from 'express';

export const router = Router();

router.get('/', (_, res) => res.json([]));
router.post('/', (req, res) => res.status(201).json(req.body));
