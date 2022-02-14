import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "./components/TopBar";
import Contacts from "./components/Contacts";
import RandomPosts from "./components/RandomPosts";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container-fluid m-0 p-0">
      <TopBar />
      <div className='row m-0 p-0 px-5'>
        <Contacts />
        <Posts />
        <RandomPosts />
      </div>
    </div>
  );
}

export default App;
