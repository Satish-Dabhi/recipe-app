const express = require('express');
const cors = require('cors');
require('./database/dbConnect');
const recipeRoute = require('./routes/recipe');
const userRoutes = require('./routes/user');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3006;

app.get('/', (req, res) => {
  res.send('Working ...:)');
});

app.use('/user', userRoutes);

app.use("/recipe", recipeRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
