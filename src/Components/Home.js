import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Posts from "./Posts";
import { PostsContext } from "../App";

const Home = () => {
  let history = useHistory();
  const { posts, DeletePost } = React.useContext(PostsContext);

  function handleClick() {
    history.push("/addpost");
  }

  return (
    <Fragment>
      <Posts
        posts={posts}
        handleClick={handleClick}
        handleDelete={DeletePost}
      />
    </Fragment>
  );
};

export default Home;
