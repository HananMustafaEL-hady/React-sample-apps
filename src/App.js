import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddPostForm from "./Components/AddPostForm";
import EditForm from "./Components/EditForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addpost" component={AddPostForm} />
          <Route path="/editpost/:id" component={EditForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
