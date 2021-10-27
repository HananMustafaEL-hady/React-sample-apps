import React from "react";
import { Link } from "react-router-dom";
import postimg from "../../images/postimg.jpg";
import getDate from "./DateFormatted";

const Card = (props) => {
  const {
    content,
    author,
    title,
    id,
    date,
    classCard,
    classImg,
    classCardTop,
    handleDelete,
    classSeemore,
    typecard,
  } = props;
  return (
    <div className={classCard}>
      <div className={classCardTop}>
        <div className="icon">
          <Link
            to={{
              pathname: `/editpost/${id}`,
              state: { content, author, title, id, date },
            }}
          >
            <i className="fas fa-edit "></i>
          </Link>
        </div>
        <div className="icon-delete">
          <i class="fas fa-trash-alt" onClick={() => handleDelete(id)}></i>
        </div>

        <img src={postimg} className={classImg} />
      </div>
      <div className="card-bottom m1">
        {typecard == "allPosts" ? (
          <div className="post-info flex-display ">
            <div className="user">
              <i className="fas fa-user"></i>
              <span>{author}</span>
            </div>
            <span>{getDate(date)}</span>
          </div>
        ) : (
          ""
        )}

        <p className="post-title m-top">{title} </p>
        <p className="post-content m-top">
          {typecard == "latest"
            ? content?.length > 300
              ? content.substring(1, 300) + "..."
              : content
            : content?.length > 77
            ? content.substring(1, 77) + "..."
            : content}
        </p>
        {typecard == "latest" ? (
          <div className="post-info flex-display  m-top1">
            <div className="user">
              <i className="fas fa-user"></i>
              <span>{author}</span>
            </div>
            <span>{getDate(date)}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <a className={classSeemore} to="#">
        See more <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Card;
