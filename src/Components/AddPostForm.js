import React from "react";
import PostForm from "./utilities/PostForm";
import { useHistory } from "react-router-dom";
import { PostsContext } from "../App";

const AddPostForm = () => {
  const { addPost } = React.useContext(PostsContext);

  return <PostForm onSubmit={addPost} title="Add Post" type="add" />;
};

export default AddPostForm;
