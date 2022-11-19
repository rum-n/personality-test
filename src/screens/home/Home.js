import React from "react";
import "./styles.css";
import HeaderImage from "./../../assets/personality.svg";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="main">
      <h1 className="title">
        The only personality test you'll ever have to take!
      </h1>
      <img className="header-image" src={HeaderImage} />
      <Link to="/test">
        <button className="start-btn">Start test</button>
      </Link>
    </div>
  );
};

export default Home;
