const mongoose = require('mongoose');

let r_Schema = new mongoose.Schema({
  id: String,
  image: String,
  title: String,
});

let u_schema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    token: String,
    recipes: [r_Schema],
  },
  {
    versionKey: false,
  }
);

const userSchema = mongoose.model('user', u_schema);

module.exports = {
  userSchema: userSchema,
};
