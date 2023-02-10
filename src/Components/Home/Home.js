import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import CreateForm from "../UserComponent/CreateForm";

const Home = () => {
  return (
    <div className="home-root">
      <Navbar />
      <CreateForm />
    </div>
  );
};

export default Home;
