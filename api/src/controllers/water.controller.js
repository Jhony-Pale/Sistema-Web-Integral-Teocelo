import Water from "../models/water.model.js";
import User from "../models/user.model.js";
import { deletefile } from "../libs/deletefile.js";
import path from "path";
import { fileURLToPath } from "url";

export const createWaterRequests = async (req, res) => {
  const { street, number, colony, town, typeConection } = req.body;
  try {
    const newWater = new Water({
      user: req.user.id,
      street,
      number,
      colony,
      town,
      typeConection,
      commentsEmployee: "",
      document: "",
      type: "request",
      status: "Entregada",
    });

    const waterSaved = await newWater.save();

    res.json({
      user: waterSaved.user,
      street: waterSaved.street,
      number: waterSaved.number,
      colony: waterSaved.colony,
      town: waterSaved.town,
      typeConection: waterSaved.typeConection,
      commentsEmployee: waterSaved.commentsEmployee,
      type: waterSaved.type,
      status: waterSaved.status,
      createdAt: waterSaved.createdAt,
      updatedAt: waterSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createWaterReports = async (req, res) => {
  const { street, number, colony, town, commentsCitizen, typeConection } =
    req.body;
  try {
    const newWater = new Water({
      user: req.user.id,
      street,
      number,
      colony,
      town,
      typeConection,
      commentsCitizen: commentsCitizen ?? "",
      commentsEmployee: "",
      type: "report",
      status: "Recibido",
    });

    const waterSaved = await newWater.save();

    res.json({
      user: waterSaved.user,
      street: waterSaved.street,
      number: waterSaved.number,
      colony: waterSaved.colony,
      town: waterSaved.town,
      commentsCitizen: waterSaved.commentsCitizen,
      commentsEmployee: waterSaved.commentsEmployee,
      typeConection: waterSaved.typeConection,
      type: waterSaved.type,
      status: waterSaved.status,
      createdAt: waterSaved.createdAt,
      updatedAt: waterSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateWater = async (req, res) => {
  const { commentsEmployee, status } = req.body;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  try {
    const updates = {};

    if(commentsEmployee) updates.commentsEmployee = commentsEmployee

    if(status) updates.status = status

    if (req.file) {
      const changedDocument = await Water.findById(req.params.id);
      const document = req.file.filename;
      updates.document = document;
      if(changedDocument.document !== ""){
          const file = {
            path: path.join(__dirname, "../public/documents/" + changedDocument.document),
          };
          deletefile(file);
      }
    }

    if(status === "Rechazada"){
      const deleteDocumentUploaded = await Water.findById(req.params.id);
      if(deleteDocumentUploaded.document !== ""){
          const file = {
            path: path.join(__dirname, "../public/documents/" + deleteDocumentUploaded.document),
          };
          const result = deletefile(file);
          if(result) updates.document = "";
      }
    }

    const water = await Water.findByIdAndUpdate(
      req.params.id,
      {
        $set: updates,
      },
      {
        new: true,
      }
    );

    if (!water) return res.status(400).json(["Registro no encontrado."]);
    res.json(water);
  } catch (error) {
    if(req.file){
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const file = {
        path: path.join(__dirname, "../public/documents/" + req.file.filename),
      };
      deletefile(file);
    }
    res.status(500).json({ message: error.message });
  }
};

export const getWaterReports = async (req, res) => {
  try {
    const water = await Water.find()
      .where("type", "report")
      .sort({ createdAt: "desc" })
      .populate({
        path: "user",
        select: "firstname lastname",
      });
    res.json(water);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWaterRequests = async (req, res) => {
  try {
    const water = await Water.find()
      .where("type", "request")
      .sort({ createdAt: "desc" })
      .populate({
        path: "user",
        select: "firstname lastname",
      });
    res.json(water);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
