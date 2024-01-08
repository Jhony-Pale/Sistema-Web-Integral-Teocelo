import { createAccessToken } from "../libs/jwt.js";
import { TOKEN_SECRET } from "../config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Lamp from "../models/lamp.model.js";
import Complaint from "../models/complaint.model.js";
import Nature from "../models/nature.model.js";
import Water from "../models/water.model.js";
import Official from "../models/official.model.js";
import Role from "../models/role.model.js";

export const register = async (req, res) => {
  const { firstname, lastname, role, email, password, phonenumber } = req.body;

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
      email,
      password: passwordHash,
    });

    if (role) {
      const foundRol = await Role.findOne({ name: role });
      newUser.role = foundRol._id;
    } else {
      const rolDefault = await Role.findOne({ name: "citizen" });
      newUser.role = rolDefault._id;
    }

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);

    const userAll = await User.findOne({ email }).populate({
      path: "role",
      select: "name",
    });

    res.json({
      firstname: userAll.firstname,
      lastname: userAll.lastname,
      phonenumber: userAll.phonenumber,
      role: userAll.role,
      email: userAll.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email }).populate({
      path: "role",
      select: "name",
    });

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
      role: userFound.role,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json([error.message]);
    console.log(error);
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
    const officials = await Official.find().where("user", req.user.id).lean();

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
    const officialsWithTitle = officials.map((official) => ({
      ...official,
      title: "official",
    }));

    const allData = [
      ...lampsWithTitle,
      ...complaintsWithTitle,
      ...naturesWithTitle,
      ...watersWithTitle,
      ...officialsWithTitle,
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
      role: user.role,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id).populate({
      path: "role",
      select: "name",
    });

    if (!userFound) return res.status(400).json(["Usuario no encontrado."]);

    res.json({
      firstname: userFound.firstname,
      lastname: userFound.lastname,
      phonenumber: userFound.phonenumber,
      role: userFound.role,
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

    const userFound = await User.findById(user.id).populate({
      path: "role",
      select: "name",
    });
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });

    return res.json({
      firstname: userFound.firstname,
      lastname: userFound.lastname,
      phonenumber: userFound.phonenumber,
      role: userFound.role,
      email: userFound.email,
    });
  });
};
