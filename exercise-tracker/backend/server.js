const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
require('dotenv').config();

const url = process.env.CONNECTION_STRING;

const connectDB = () =>
  mongoose
    .connect(url, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
})
.then(() => console.log(`DB is connected for project`))
.catch((err) => console.log(err));

connectDB();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);

app.listen(port, () => {
   console.log(`Server is listening at ${port}`);
})