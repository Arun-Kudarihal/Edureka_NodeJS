require("dotenv").config();
const mongoose = require("mongoose");

const mongo_url = 'mongodb+srv://arunkumar9823:jIrFOS2zC5SrQs8O@cluster0.whuw7ai.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(mongo_url, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("Some error occured in connecting to database! ", err);
  });
