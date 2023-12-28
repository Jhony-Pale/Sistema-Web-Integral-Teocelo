import { createAccessToken } from "../libs/jwt.js";
import { TOKEN_SECRET } from "../config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Lamp from "../models/lamp.model.js";
import Complaint from "../models/complaint.model.js";
import Nature from "../models/nature.model.js";
import Water from "../models/water.model.js";

export const register = async (req, res) => {
  const { firstname, lastname, rol, email, password, phonenumber } = req.body;

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
      phonenumber: phonenumber ?? "",
      rol: rol ?? "citizen",
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      firstname: userSaved.firstname,
      lastname: userSaved.lastname,
      phonenumber: userSaved.phonenumber,
      rol: userSaved.rol,
      email: userSaved.email,
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
      firstname: userFound.firstname,
      lastname: userFound.lastname,
      phonenumber: userFound.phonenumber,
      rol: userFound.rol,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const history = async (req, res) => {
  try {
    const lamps = await Lamp.find().where("user", req.user.id).lean();
    const complaints = await Complaint.find().where("user", req.user.id).lean();
    const natures = await Nature.find().where("user", req.user.id).lean();
    const waters = await Water.find().where("user", req.user.id).lean();

    const lampsWithTitle = lamps.map((lamp) => ({ ...lamp, title: "lamp" }));
    const complaintsWithTitle = complaints.map((complaint) => ({
      ...complaint,
      title: "complaint",
    }));
    const naturesWithTitle = natures.map((nature) => ({
      ...nature,
      title: "nature",
    }));
    const watersWithTitle = waters.map((water) => ({
      ...water,
      title: "water",
    }));

    const allData = [
      ...lampsWithTitle,
      ...complaintsWithTitle,
      ...naturesWithTitle,
      ...watersWithTitle,
    ];
    const sortedData = allData.sort((a, b) => b.createdAt - a.createdAt);

    return res.json(sortedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  const { email } = req.body;
  try {
    const sameEmail = await User.findOne({ email });
    if (sameEmail)
      return res
        .status(400)
        .json(["El correo electrónico ya fue registrado anteriormente."]);

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    if (!user) return res.status(400).json(["Usuario no encontrado."]);

    res.json({
      firstname: user.firstname,
      lastname: user.lastname,
      phonenumber: user.phonenumber,
      rol: user.rol,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json(["Usuario no encontrado."]);
    res.json({
      firstname: userFound.firstname,
      lastname: userFound.lastname,
      phonenumber: userFound.phonenumber,
      email: userFound.email,
    });
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
