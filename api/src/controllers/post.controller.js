import Post from "../models/post.model.js";
import { deletefile } from "../libs/deletefile.js";
import path from "path";
import { fileURLToPath } from "url";

export const createPost = async (req, res) => {
  const { title, type, body } = req.body;
  const image = req.file.filename;
  try {
    const postFound = await Post.findOne({ title });
    if (postFound) {
      deletefile(req.file);
      return res
        .status(400)
        .json(["Ya existe una publicación con ese título."]);
    }

    const newPost = new Post({
      title,
      type,
      body,
      image,
    });

    const postSaved = await newPost.save();

    res.json({
      id: postSaved._id,
      title: postSaved.title,
      type: postSaved.type,
      body: postSaved.body,
      image: postSaved.image,
      createdAt: postSaved.createdAt,
      updatedAt: postSaved.updatedAt,
    });
  } catch (error) {
    deletefile(req.file);
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { title, type, body } = req.body;
  try {
    const sameTitle = await Post.findOne({
      title,
      _id: { $ne: req.params.id },
    });
    if (sameTitle)
      return res
        .status(400)
        .json(["Ya existe una publicación con ese título."]);

    const updates = {
      title,
      type,
      body,
    };
    if (req.file) {
      const changedImage = await Post.findById(req.params.id);
      const image = req.file.filename;
      updates.image = image;
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const file = {
        path: path.join(__dirname, "../public/images/" + changedImage.image),
      };
      deletefile(file);
    }

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: updates,
      },
      {
        new: true,
      }
    );

    if (!post) return res.status(400).json(["Publicación no encontrada."]);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const postFound = await Post.findByIdAndDelete(req.params.id);
    if (!postFound) return res.status(400).json(["Publicación no encontrada."]);

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = {
      path: path.join(__dirname, "../public/images/" + post.image),
    };
    const result = deletefile(file);
    if(!result) console.log("No se puedo eliminar la imagen")
    
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const decodedTitle = decodeURIComponent(req.params.title);
    const postFound = await Post.findOne({ title: decodedTitle });
    if (!postFound) return res.status(400).json(["Publicación no encontrada."]);
    res.json(postFound);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: "desc" });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
