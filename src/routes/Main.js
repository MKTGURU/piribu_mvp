import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Contents from "../components/Contents";
import "../css/Main.css";
import WriteBox from "../components/WriteBox";

function Main({ userObj }) {
  return (
    <div className="Main">
      <div>
        <Header />
        <Navigation />
        <Sidebar />
        <WriteBox userObj={userObj} />
        <Contents userObj={userObj} />
      </div>
    </div>
  );
}

export default Main;
