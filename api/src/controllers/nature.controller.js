import Nature from "../models/nature.model.js";
import User from "../models/user.model.js";

export const createNature = async (req, res) => {
  const { commentsCitizen, typeRequest } = req.body;
  try {
    const newNature = new Nature({
      user: req.user.id,
      typeRequest,
      commentsCitizen: commentsCitizen ?? "",
      commentsEmployee: "",
      status: "Entregada",
    });

    const natureSaved = await newNature.save();

    res.json({
      user: natureSaved.user,
      typeRequest: natureSaved.typeRequest,
      commentsCitizen: natureSaved.commentsCitizen,
      commentsEmployee: natureSaved.commentsEmployee,
      status: natureSaved.status,
      createdAt: natureSaved.createdAt,
      updatedAt: natureSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNature = async (req, res) => {
  const { commentsEmployee, status } = req.body;
  try {
    const updates = {
      commentsEmployee: commentsEmployee ?? "Ninguno.",
      status,
    };

    const nature = await Nature.findByIdAndUpdate(
      req.params.id,
      {
        $set: updates,
      },
      {
        new: true,
      }
    );

    if (!nature) return res.status(400).json(["Solicitud no encontrada."]);
    res.json(nature);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNatureCattle = async (req, res) => {
  try {
    const nature = await Nature.find()
      .where("typeRequest", "cattle")
      .sort({ createdAt: "desc" })
      .populate({
        path: "user",
        select: "firstname lastname",
      });
    res.json(nature);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNatureAgricultural = async (req, res) => {
  try {
    const nature = await Nature.find()
      .where("typeRequest", "agricultural")
      .sort({ createdAt: "desc" })
      .populate({
        path: "user",
        select: "firstname lastname",
      });
    res.json(nature);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNatureBamboo = async (req, res) => {
  try {
    const nature = await Nature.find()
      .where("typeRequest", "bamboo")
      .sort({ createdAt: "desc" })
      .populate({
        path: "user",
        select: "firstname lastname",
      });
    res.json(nature);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
