import React from "react";
import "../css/SidebarOption.css";
import Category from "./CategoryPick";
import Search from "./Search";

function SidebarOption({ Icon, text }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h4>{text}</h4>
    </div>
  );
}

export default SidebarOption;
