import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('welcome to Iwawe APP');
});

app.listen(port, () => {
  console.log(`app is running on port: ${port}`);
});
