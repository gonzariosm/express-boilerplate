import dotenv from 'dotenv';
import express from 'express';

// init dotenv
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8080;

// set json parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define handler for the default home page
app.get('/', (req, res) => {
  res.send('Works fine!');
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
