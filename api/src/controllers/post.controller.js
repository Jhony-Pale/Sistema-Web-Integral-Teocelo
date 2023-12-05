import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  const { title, type, body, image } = req.body;
  try {
    const postFound = await Post.findOne({ title });
    if (postFound)
      return res
        .status(400)
        .json(["Ya existe una publicación con ese título."]);

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
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { title } = req.body;
  try {
    const sameTitle = await Post.findOne({
      title,
      _id: { $ne: req.params.id },
    });
    if (sameTitle)
      return res
        .status(400)
        .json(["Ya existe una publicación con ese título."]);

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.status(400).json(["Publicación no encontrada."]);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postFound = await Post.findOneAndDelete(req.params.id);
    if (!postFound) return res.status(400).json(["Publicación no encontrada."]);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const postFound = await Post.findById(req.params.id);
    if (!postFound) return res.status(400).json(["Publicación no encontrada."]);
    res.json(postFound);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
