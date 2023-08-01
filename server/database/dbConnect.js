const mongoose = require("mongoose");
require("dotenv").config();

const DB_URI = 'mongodb+srv://'+process.env.NAME+':'+process.env.PASSWORD+'@cluster0.djnk3.mongodb.net/recipeApp?retryWrites=true&w=majority';

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected');
  });
