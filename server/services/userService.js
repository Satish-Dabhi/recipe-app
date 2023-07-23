const schema = require('../database/schema');

const createNewUser = async (data) => {
  try {
    const doesExist = await schema.userSchema.findOne({ token: data.token });
    if (doesExist) {
      doesExist.recipes.push(...data.recipes);
      const newData = { ...data, recipes: doesExist.recipes };
      return await schema.userSchema
        .updateOne({ token: data.token }, { $set: newData })
        .then((result) => {
          if (result) {
            return { message: 'User Created successfully', status: 'created' };
          } else {
            return { message: 'Something went wrong', status: 'unDone' };
          }
        })
        .catch((err) => console.warn(err));
    } else {
      const user = new schema.userSchema(data);
      const savedUser = await user.save();
      if (savedUser) {
        return { message: 'User Created successfully', status: 'created' };
      } else {
        return { message: 'Something went wrong', status: 'unDone' };
      }
    }
  } catch (error) {
    throw new Error('Failed to create a user', error);
  }
};

const getUserByToken = async (token) => {
  return await schema.userSchema
    .findOne({ token: token }, function (err, result) {
      if (err) {
        throw err;
      } else {
        return result;
      }
    })
    .clone()
    .catch(function (err) {
      return err;
    });
};

module.exports = {
  createNewUser,
  getUserByToken
};
