import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TwitterIcon from "@mui/icons-material/Twitter";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import NavOption from "./NavOption";
import "../css/Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <NavOption Icon={TwitterIcon} text="Feed" />
      <NavOption Icon={MoreHorizIcon} text="Board" />
      <NavOption Icon={ListAltIcon} text="Archive" />
      <NavOption Icon={PermIdentityIcon} text="Mine" />
    </div>
  );
}

export default Navigation;
