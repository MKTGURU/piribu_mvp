import React from "react";
import "../css/NavOption.css";

function NavOption({ Icon, text }) {
  return (
    <div className="NavOption">
      <Icon />
      <h4>{text}</h4>
    </div>
  );
}

export default NavOption;
