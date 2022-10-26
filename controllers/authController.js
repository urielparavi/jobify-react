import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res, next) => {
  res.send("login user");
};

const updateUser = async (req, res, next) => {
  res.send("updateUser user");
};

export { register, login, updateUser };
