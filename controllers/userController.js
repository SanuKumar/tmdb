let users = require("../mockData/users.json");

const userList = async (req, res) => {
  await res.send(users);
};

const findUser = async (req, res) => {
  const user = users.find((user) => user.name === req.params.name);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("User not found");
  }
};

module.exports = { userList, findUser };
