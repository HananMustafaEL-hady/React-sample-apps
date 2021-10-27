import React from "react";
import PostForm from "./utilities/PostForm";
import { useHistory } from "react-router-dom";

const AddPostForm = () => {
  var arr = [];
  let history = useHistory();
  const date = new Date();
  const onSubmit = (data) => {
    console.log(data);
    arr = localStorage.getItem("posts")
      ? JSON.parse(localStorage.getItem("posts"))
      : [];
    arr.push({ ...data, date, id: arr.length + 1 });
    localStorage.setItem("posts", JSON.stringify(arr));
    history.push("/");
  };
  return <PostForm onSubmit={onSubmit} title="Add Post" />;
};

export default AddPostForm;
