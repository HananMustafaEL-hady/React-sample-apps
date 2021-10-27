import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Posts from "./Posts";
const Home = () => {
  const [posts, setPosts] = useState([]);
  let history = useHistory();
  let arr = [];
  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("posts")));
  }, []);
  function handleClick() {
    history.push("/addpost");
  }

  function handleDelete(id) {
    const areYouSure = window.confirm(
      "Do you really want to delete this post? "
    );
    if (areYouSure) {
      arr = JSON.parse(localStorage.getItem("posts"));
      arr.splice(id - 1, 1);
      setPosts(arr);
      localStorage.setItem("posts", JSON.stringify(arr));
    }
  }
  const d = new Date();
  return (
    <Fragment>
      <Posts
        posts={posts}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
    </Fragment>
  );
};

export default Home;
