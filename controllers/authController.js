const register = async (req, res, next) => {
  res.send("register user");
};

const login = async (req, res, next) => {
  res.send("login user");
};

const updateUser = async (req, res, next) => {
  res.send("updateUser user");
};

export { register, login, updateUser };
