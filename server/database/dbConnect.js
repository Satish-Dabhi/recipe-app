const mongoose = require("mongoose");
require("dotenv").config();



// mongodb://atlas-sql-62359e0dd0f3c742cf1286d5-djnk3.a.query.mongodb.net/myFirstDatabase?ssl=true&authSource=admin
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected');
  });
