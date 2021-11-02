const date = new Date();

export default function reducer(state, action) {
  switch (action.type) {
    case "setPosts":
      return { ...state, posts: action.payload };
    case "firstpost":
      localStorage.setItem(
        "posts",
        JSON.stringify([
          {
            id: 1,
            name: action.payload.name,
            title: action.payload.title,
            author: action.payload.author,
            content: action.payload.content,
            img: action.payload.img,
            createdAt: date,
          },
        ])
      );
      return {
        ...state,
        posts: [
          {
            id: 1,
            name: action.payload.name,
            title: action.payload.title,
            author: action.payload.author,
            content: action.payload.content,
            img: action.payload.img,

            createdAt: date,
          },
        ],
      };
    case "add":
      console.log(action.payload);
      console.log(action.payload.img);

      localStorage.setItem(
        "posts",
        JSON.stringify([
          ...state?.posts,
          {
            id: state?.posts?.length + 1,
            name: action.payload.name,
            title: action.payload.title,
            author: action.payload.author,
            content: action.payload.content,
            img: action.payload.img,

            createdAt: date,
          },
        ])
      );

      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state?.posts?.length + 1,
            name: action.payload.name,
            title: action.payload.title,
            author: action.payload.author,
            content: action.payload.content,
            img: action.payload.img,

            createdAt: date,
          },
        ],
      };

    case "edit":
      let objIndex = state.posts.findIndex(
        (obj) => obj.id == action.payload.id
      );
      if (objIndex >= 0) {
        state.posts[objIndex] = {
          ...action.payload.data,
          createdAt: date,
          id: action.payload.id,
        };
      }
      localStorage.setItem("posts", JSON.stringify([...state?.posts]));

      return {
        ...state,
      };

    case "delete":
      const areYouSure = window.confirm(
        "Do you really want to delete this post? "
      );
      if (areYouSure) {
        state.posts.splice(action.payload.id - 1, 1);

        localStorage.setItem("posts", JSON.stringify(state.posts));
      }
      return { ...state };
    default:
      return state;
  }
}
