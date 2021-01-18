import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send(`Welcome to home page`);
});
app.listen(port, () => {
    console.log(`Appis listening to port ${port}`);
});
