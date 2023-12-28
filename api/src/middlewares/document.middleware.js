import Water from "../models/water.model.js";
import User from "../models/user.model.js";

export const validateDocument = () => async (req, res, next) => {
  try {
    const userFound = await User.findById(req.user.id);
    const documentName = req.url.split('/').pop();
    const hasMatchingDocument = await Water.exists({ user: req.user.id, document: documentName });
    if(userFound.rol === "citizen"){
        if(!hasMatchingDocument) return res.status(401).json("Not found" );
    }
    next();
  } catch (error) {
    console.log(error)
  }
};
