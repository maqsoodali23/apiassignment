import express from 'express';
import routes from './routes';
// import path from 'path';
// import { createDoc } from 'apidoc';

const app = express();
const port = 3000;

// const doc = createDoc({
//   src: path.resolve(__dirname, 'routes'),
//   dest: path.resolve(__dirname, 'doc')
// })

// if (typeof doc !== 'boolean') {
//   // Documentation was generated!
//   console.log(doc.data) // `api_data.json` file content
//   console.log(doc.project) // `api_project.json` file content
// } else {
//   console.log('Doc could not be generated');
// }

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes());

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
