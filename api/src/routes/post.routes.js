import { Router } from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
} from "../controllers/post.controller.js";
import {
  createPostSchema,
  updatePostSchema,
} from "../schemas/post.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/posts", authRequired, getPosts);
router.get("/posts/:id", authRequired, getPost);
router.post("/posts", authRequired, validateSchema(createPostSchema), createPost);
router.delete("/posts/:id", authRequired, deletePost);
router.put("/posts/:id", authRequired, validateSchema(updatePostSchema), updatePost);

export default router;