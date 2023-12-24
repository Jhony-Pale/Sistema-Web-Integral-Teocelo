import { createAccessToken } from "../libs/jwt.js";
import { TOKEN_SECRET } from "../config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Lamp from "../models/lamp.model.js"

export const register = async (req, res) => {
  const { firstname, lastname, rol, email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res
        .status(400)
        .json(["El correo electrónico ya fue registrado anteriormente."]);

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      rol,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      firstname: userSaved.firstname,
      lastname: userSaved.lastname,
      rol: userSaved.rol,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json(["User not found"]);

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json(["¡Usuario o contraseña incorrectos!"]);

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      firstname: userFound.firstname,
      lastname: userFound.lastname,
      rol: userFound.rol,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  try {
    const lamps = await Lamp.find().where("user", req.user.id);
    /* const waters = await Lamp.find().where("user", req.user.id);
    const ambients = await Lamp.find().where("user", req.user.id); */

    /* const allRequests = [...lamps, ...waters, ...ambients];
    const sortedRequests = allRequests.sort((a, b) => b.createdAt - a.createdAt); */

    return res.json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });

    return res.json({
      id: userFound._id,
      firstname: userFound.firstname,
      lastname: userFound.lastname,
      rol: userFound.rol,
      email: userFound.email,
    });
  });
};
