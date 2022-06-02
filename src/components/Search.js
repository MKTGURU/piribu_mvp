import React from "react";
import "../css/SidebarOption.css";

function Search({ Icon, text }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h4>{text}</h4>
    </div>
  );
}

export default Search;
