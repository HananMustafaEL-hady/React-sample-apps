import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddPostForm from "./Components/AddPostForm";
import EditForm from "./Components/EditForm";
import reducer from "./Components/reducer";
const initialState = {
  posts: [],
};
export const PostsContext = React.createContext(null);
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    posts: state?.posts,
    addPost: async (data) => {
      console.log(data.img);
      if (data.img?.length) {
        const file = data.img[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");
          data.img = base64String;
          console.log(data);
          localStorage.getItem("posts")
            ? dispatch({ type: "add", payload: data })
            : dispatch({ type: "firstpost", payload: data });
        };
        reader.readAsDataURL(file);
      } else {
        localStorage.getItem("posts")
          ? dispatch({ type: "add", payload: data })
          : dispatch({ type: "firstpost", payload: data });
      }
    },
    EditPost: (id, data) => {
      dispatch({ type: "edit", payload: { data, id } });
    },

    DeletePost: (id) => {
      dispatch({ type: "delete", payload: { id } });
    },
  };
  useEffect(() => {
    dispatch({
      type: "setPosts",
      payload: JSON.parse(localStorage.getItem("posts")),
    });
  }, []);
  return (
    <div className="App">
      <PostsContext.Provider value={value}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addpost" component={AddPostForm} />
            <Route path="/editpost/:id" component={EditForm} />
          </Switch>
        </BrowserRouter>
      </PostsContext.Provider>
    </div>
  );
}

export default App;
