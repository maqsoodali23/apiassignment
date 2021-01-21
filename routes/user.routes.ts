import { Router } from 'express';
import {  signup, login } from '../controllers/user.controller';

const router = Router();

router.get('/', (_req, res) => {
    res.json({ message: `This is the default route for users API` });
});
router.post('/signup', signup);
router.post('/login', login);

export default router;
