import { Router } from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
} from "../controllers/post.controller.js";
import { createPostSchema, updatePostSchema } from "../schemas/post.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { authRequired } from "../middlewares/validateToken.js";
import multer from "multer";
import path from "path";

const router = Router();

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  },
  destination: (req, file, cb) => {
    cb(null, "src/public/images");
  },
});

const upload = multer({
  storage: storage,
});

router.get("/posts", authRequired, getPosts);
router.get("/posts/:id", authRequired, getPost);
router.post(
  "/posts",
  authRequired,
  upload.single("image"),
  validateSchema(createPostSchema),
  createPost
);
router.put(
  "/posts/:id",
  authRequired,
  validateSchema(updatePostSchema),
  updatePost
);
router.delete("/posts/:id", authRequired, deletePost);

export default router;
