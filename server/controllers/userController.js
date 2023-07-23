const userService = require('../services/userService');

const createNewUser = async (req, res) => {
  try {
    const { body } = req;
    const savedUser = await userService.createNewUser(body);
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByToken = async (req, res) => {
  const {
    params: { token },
  } = req;
  if (!token) {
    return;
  }
  const user = await userService.getUserByToken(token);
  res.send({ status: "OK", data: user });
};

module.exports = {
  createNewUser,
  getUserByToken
};
