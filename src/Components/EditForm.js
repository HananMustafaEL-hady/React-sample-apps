import React from "react";
import PostForm from "./utilities/PostForm";
import { PostsContext } from "../App";
import { useParams, useLocation } from "react-router-dom";

const EditForm = () => {
  const { EditPost } = React.useContext(PostsContext);
  let { id } = useParams();
  let Postdata = useLocation();

  return (
    <PostForm
      Data={Postdata.state}
      onSubmit={EditPost}
      title="Edit Post"
      type="edit"
      id={id}
    />
  );
};

export default EditForm;
