import { Router } from 'express';
import userRoutes from './user.routes';

const router = Router();

const routes = () => {
  router.get('/', (_req, res) => {
    res.json({ message: `This is the default route for this API` });
  });
  router.use(userRoutes);
  return router;
};

export default routes;
