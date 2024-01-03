import { deletefile } from "../libs/deletefile.js";
import { fileURLToPath } from "url";
import getNextSequence from "../libs/counters.js";
import Official from "../models/official.model.js";
import User from "../models/user.model.js";
import path from "path";

export const createOfficial = async (req, res) => {
  const { commentsCitizen } = req.body;
  try {
    const folio = await getNextSequence("Official_Folio");
    const paddedCounter = folio.toString().padStart(4, '0');

    const newOfficial = new Official({
      user: req.user.id,
      folio: `OF-${paddedCounter}`,
      commentsCitizen: commentsCitizen ?? "",
      commentsEmployee: "",
      document: req.file.filename,
      type: "request",
      status: "Entregada",
    });

    const officialSaved = await newOfficial.save();

    res.json({
      user: officialSaved.user,
      folio: officialSaved.folio,
      commentsCitizen: officialSaved.commentsCitizen,
      status: officialSaved.status,
      createdAt: officialSaved.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOfficial = async (req, res) => {
  const { commentsEmployee, status } = req.body;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  try {
    const updates = {};

    if(commentsEmployee) updates.commentsEmployee = commentsEmployee

    if(status) updates.status = status

    if (req.file) {
      const previousDocument = await Official.findById(req.params.id);
      const document = req.file.filename;
      updates.document = document;
      if(previousDocument.document !== ""){
          const file = {
            path: path.join(__dirname, "../public/documents/" + previousDocument.document),
          };
          deletefile(file);
      }
    }

    if(status === "Rechazada"){
      const deleteDocumentUploaded = await Official.findById(req.params.id);
      if(deleteDocumentUploaded.document !== ""){
          const file = {
            path: path.join(__dirname, "../public/documents/" + deleteDocumentUploaded.document),
          };
          const result = deletefile(file);
          if(result) updates.document = "";
      }
    }

    const official = await Official.findByIdAndUpdate(
      req.params.id,
      {
        $set: updates,
      },
      {
        new: true,
      }
    );

    if (!official) return res.status(400).json(["Registro no encontrado."]);
    res.json(official);
  } catch (error) {
    if(req.file){
      const file = {
        path: path.join(__dirname, "../public/documents/" + req.file.filename),
      };
      deletefile(file);
    }
    res.status(500).json({ message: error.message });
  }
};

export const getOfficialRequests = async (req, res) => {
  try {
    const official = await Official.find()
      .sort({ createdAt: "desc" })
      .populate({
        path: "user",
        select: "firstname lastname phonenumber",
      });
    res.json(official);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
