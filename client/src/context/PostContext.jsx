import { createContext, useContext, useEffect, useState } from "react";
import { createPostRequest } from "../api/post";

const PostContext = createContext();

export const usePosts = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }

  return context;
};

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [errors, setErrors] = useState([]);

  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      return res.data
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <PostContext.Provider
      value={{
        posts,
        errors,
        createPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
