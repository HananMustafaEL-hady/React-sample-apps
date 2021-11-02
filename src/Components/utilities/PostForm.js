import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";

import Button from "./Button";
import { useHistory } from "react-router-dom";
import Styles from "../../styles/form.module.css";

const PostForm = ({ Data, onSubmit, title, type, id }) => {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: Data?.title,
      author: Data?.author,
      content: Data?.content,
    },
  });
  return (
    <div className="container ">
      <div>
        <h2 className="">{title}</h2>
        <form
          onSubmit={handleSubmit(async (data) => {
            type == "add" ? await onSubmit(data) : await onSubmit(id, data),
              console.log(data),
              history.push("/");
          })}
          className="flex-item-col"
        >
          {/* <form onSubmit={handleSubmit(onSubmit)} className="flex-item-col"> */}
          <div className="flex-item-col ">
            <div className={Styles.flex__form}>
              <div
                className="
               "
              >
                <label
                  htmlFor="title"
                  className={`${Styles.block__display}  ${Styles.my}`}
                >
                  <small className="text-bold">Title</small>
                </label>

                <input
                  {...register("title", { required: true })}
                  className={Styles.form__control}
                  placeholder="Add title"
                />
                {errors.title && <p>title is required.</p>}
              </div>
              <div className=" ">
                <label
                  htmlFor="author"
                  className={`${Styles.block__display}  ${Styles.my}`}
                >
                  <small className="text-bold">Author</small>
                </label>

                <input
                  {...register("author", { required: true })}
                  className={Styles.form__control}
                  placeholder="Add author"
                />
                {errors.author && <p>author is required.</p>}
              </div>
            </div>
            <div className="  ">
              <label
                htmlFor="Content"
                className={`${Styles.block__display}  ${Styles.my}`}
              >
                <small className="text-bold"> Content</small>
              </label>

              <textarea
                {...register("content", { required: true })}
                placeholder="Add Content"
                rows="6"
                id="Content"
                className={` ${Styles.Content}   ${Styles.block__display}
              `}
                cols="70"
                autoComplete="off"
              ></textarea>
              {errors.content && <p>content is required.</p>}
            </div>
            <input
              {...register("img")}
              type="file"
              id="file"
              className="inputfile"
            />
            <label for="file">upload image </label>
          </div>
          <div className={Styles.flex__dev}>
            <Button value="send" type="submit" classStyle={Styles.item__auto} />
          </div>
        </form>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number,
};
export default PostForm;
