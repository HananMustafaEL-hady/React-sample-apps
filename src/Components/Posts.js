import React, { useState, useEffect, Fragment } from "react";
import Button from "./utilities/Button";
import Card from "./utilities/Card";
import { Link } from "react-router-dom";
const Posts = ({ posts, handleDelete, handleClick }) => {
  const [allPosts, setAllPosts] = useState(true);

  function handleSeeMore() {
    setAllPosts(false);
  }
  useEffect(() => {
    setAllPosts(true);
  }, []);

  return (
    <Fragment>
      {allPosts ? (
        <Fragment>
          <div className="flex-around">
            <h2>Latest Post</h2>
            <h4>
              <Link to="/" className="p1 link ">
                Posts({JSON.parse(localStorage.getItem("posts"))?.length})
              </Link>
            </h4>
          </div>
          <div className=" container">
            <Card
              title={posts && posts[posts.length - 1]?.title}
              author={posts && posts[posts.length - 1]?.author}
              content={posts && posts[posts.length - 1]?.content}
              id={posts && posts[posts.length - 1]?.id}
              date={posts && posts[posts.length - 1]?.createdAt}
              typecard="latest"
              classCard="card-row "
              classImg="img2"
              classCardTop="card-top  m-right"
              postImg={posts && posts[posts.length - 1]?.img}
              classSeemore="last-item2 btn-see"
            />
            <Button
              value="See More"
              type="button"
              classStyle="m3"
              handleMethod={handleSeeMore}
            />
          </div>
        </Fragment>
      ) : (
        <div className="container ">
          <Button
            value="Add Post"
            type="button"
            classStyle="last-item-add "
            handleMethod={handleClick}
          />

          <div className=" grid-items mt">
            {posts?.map((item, index) => {
              // console.log(item, index);
              return (
                <Card
                  title={item.title}
                  author={item.author}
                  content={item.content}
                  id={item.id}
                  key={index}
                  date={item.createdAt}
                  postImg={item.img}
                  classCard="card flex-item-col"
                  classImg="img1"
                  classCardTop="card-top "
                  classSeemore="m-bottom m-right last-item btn-see"
                  handleDelete={handleDelete}
                  typecard="allPosts"
                />
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Posts;
