import { Router } from 'express';
import {  addBlog, updateBlog } from '../controllers/blog.controller';

const router = Router();

router.get('/', (_req, res) => {
    res.json({ message: `This is the default route for blogs API` });
});
router.post('/addBlog', addBlog);
router.post('/updateBlog', updateBlog);

export default router;
