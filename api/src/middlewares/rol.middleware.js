import User from "../models/user.model.js";
export const validateRol = (rolAuth) => async (req, res, next) => {
  try {
    const userFound = await User.findById(req.user.id);
    if (!rolAuth === userFound.rol)
      return res.status(401).json({ message: "Authorization denied" });
    next();
  } catch (error) {
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};
