import { Router } from 'express';
import {  addBlog, updateBlog } from '../controllers/blog.controller';
import { body } from 'express-validator';

const router = Router();

router.get('/', (_req, res) => {
    res.json({ message: `This is the default route for blogs API` });
});
router.post(
    '/addBlog',
    [body('userId').notEmpty(), body('blogText').notEmpty()],
    addBlog
);
router.post(
    '/updateBlog',
    [body('userId').notEmpty(), body('blogText').notEmpty()],
    updateBlog
);

export default router;
