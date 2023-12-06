import { createContext, useContext, useState } from "react";
import { createPostRequest } from "../api/post"

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

const createPost = async (post) => {
    const res = await createPostRequest(post)
    console.log(res)
}

  return (
    <PostContext.Provider
      value={{
        posts,
        createPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
