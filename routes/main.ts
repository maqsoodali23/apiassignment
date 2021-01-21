import { Router } from 'express';
import userRoutes from './user.routes';
import blogRoutes from './blog.routes';

const router = Router();

const routes = () => {
  router.get('/', (_req, res) => {
    res.json({ message: `This is the default route for this API` });
  });
  router.use('/users/', userRoutes);
  router.use('/blogs/', blogRoutes);
  return router;
};

export default routes;
