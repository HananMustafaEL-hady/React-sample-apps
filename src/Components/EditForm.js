import React from "react";
import PostForm from "./utilities/PostForm";
import { useHistory, useParams, useLocation } from "react-router-dom";

const EditForm = () => {
  var arr = [];
  let history = useHistory();
  let { id } = useParams();
  let Postdata = useLocation();
  const newdate = new Date();

  console.log(Postdata.state);

  const onSubmit = (data) => {
    arr = JSON.parse(localStorage.getItem("posts"));
    arr[id - 1] = { ...data, date: newdate, id };
    localStorage.setItem("posts", JSON.stringify(arr));
    history.push("/");
  };
  return (
    <PostForm Data={Postdata.state} onSubmit={onSubmit} title="Edit Post" />
  );
};

export default EditForm;
