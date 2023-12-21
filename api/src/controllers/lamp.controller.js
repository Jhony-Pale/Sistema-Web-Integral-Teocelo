import Lamp from "../models/lamp.model.js";
import User from "../models/user.model.js"

export const createLampRequests = async (req, res) => {
  const { street, number, colony, town, commentsCitizen } = req.body;
  try {
    const newLamp = new Lamp({
      user: req.user.id,
      street,
      number,
      colony,
      town,
      commentsCitizen: commentsCitizen ?? "",
      commentsEmployee: "",
      type: "request",
      status: "Entregada",
    });

    const lampSaved = await newLamp.save();

    res.json({
      user: lampSaved.user,
      street: lampSaved.street,
      number: lampSaved.number,
      colony: lampSaved.colony,
      town: lampSaved.town,
      commentsCitizen: lampSaved.commentsCitizen,
      commentsEmployee: lampSaved.commentsEmployee,
      type: lampSaved.type,
      status: lampSaved.status,
      createdAt: lampSaved.createdAt,
      updatedAt: lampSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLampReports = async (req, res) => {
  const { street, number, colony, town, commentsCitizen, typeLamp } = req.body;
  try {
    const newLamp = new Lamp({
      user: req.user.id,
      street,
      number,
      colony,
      town,
      typeLamp: typeLamp ?? "LED",
      commentsCitizen: commentsCitizen ?? "",
      commentsEmployee: "",
      type: "report",
      status: "Recibido",
    });

    const lampSaved = await newLamp.save();

    res.json({
      user: lampSaved.user,
      street: lampSaved.street,
      number: lampSaved.number,
      colony: lampSaved.colony,
      town: lampSaved.town,
      commentsCitizen: lampSaved.commentsCitizen,
      commentsEmployee: lampSaved.commentsEmployee,
      typeLamp: lampSaved.typeLamp,
      type: lampSaved.type,
      status: lampSaved.status,
      createdAt: lampSaved.createdAt,
      updatedAt: lampSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLamp = async (req, res) => {
  const { commentsEmployee, status } = req.body;
  try {
    const updates = {
      commentsEmployee: commentsEmployee ?? "Ninguno.",
      status,
    };

    const lamp = await Lamp.findByIdAndUpdate(
      req.params.id,
      {
        $set: updates,
      },
      {
        new: true,
      }
    );

    if (!lamp) return res.status(400).json(["Solicitud no encontrada."]);
    res.json(lamp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLampReports = async (req, res) => {
  try {
    const lamps = await Lamp.find()
      .where("type", "report")
      .sort({ createdAt: "desc" })
      .populate({
        path: "user",
        select: "firstname lastname",
      });
    res.json(lamps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLampRequests = async (req, res) => {
  try {
    const lamps = await Lamp.find()
      .where("type", "request")
      .sort({ createdAt: "desc" })
      .populate({
        path: "user",
        select: "firstname lastname",
      });
    res.json(lamps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
