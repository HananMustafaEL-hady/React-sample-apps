import React from "react";

import { useForm } from "react-hook-form";

import Button from "./Button";

const PostForm = ({ Data, onSubmit, title }) => {
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
        <h2 className="m1">{title}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex-item-col">
          <div className="flex-item-col m1">
            <div className="flex-form  ">
              <div className="form-group m1">
                <label htmlFor="title" className="block-display">
                  <small className="text-bold">Title</small>
                </label>

                <input
                  {...register("title", { required: true })}
                  className="form-control"
                  placeholder="Add title"
                />
                {errors.title && <p>title is required.</p>}
              </div>
              <div className="form-group m1">
                <label htmlFor="author" className="block-display">
                  <small className="text-bold">Author</small>
                </label>

                <input
                  {...register("author", { required: true })}
                  className="form-control"
                  placeholder="Add author"
                />
                {errors.author && <p>author is required.</p>}
              </div>
            </div>
            <div className="form-group m1 ">
              <label htmlFor="Content" className="block-display">
                <small className="text-bold"> Content</small>
              </label>

              <textarea
                {...register("content", { required: true })}
                placeholder="Add Content"
                rows="6"
                id="Content"
                className="Content form-control block-display"
                cols="70"
                autoComplete="off"
              ></textarea>
              {errors.content && <p>content is required.</p>}
            </div>
            <Button value="send" type="submit" classStyle="last-item-form " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
