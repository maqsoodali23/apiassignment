import { Router } from 'express';
import {  signup, login } from '../controllers/user.controller';
import { body } from 'express-validator';

const router = Router();

router.get('/', body('email').isEmail(), (_req, res) => {
    res.json({ message: `This is the default route for users API` });
});

router.post(
    '/signup',
    [body('email').isEmail(), body('password').isLength({ min: 5 }), body('firstName').notEmpty(), body('lastName').notEmpty()],
    signup
    );
router.post(
    '/login',
    [body('email').isEmail(), body('password').notEmpty()],
    login
    );

export default router;
