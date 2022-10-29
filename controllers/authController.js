import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    //Since we using the express async errors package,
    // Instead of going with next(error), we need to throw Error("the message")
    // CustomAPIError => We still send the message, but also the status code
    throw new BadRequestError("Please provide all values.");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use.");
  }
  const user = await User.create({ name, email, password });
  res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res, next) => {
  res.send("login user");
};

const updateUser = async (req, res, next) => {
  res.send("updateUser user");
};

export { register, login, updateUser };
