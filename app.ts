import express from 'express';
import routes from './routes/main';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes());

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
