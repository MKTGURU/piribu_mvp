import React from "react";
import "../css/Sidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Button from "@mui/material/Button";
import CategoryPick from "./CategoryPick";
import Search from "./Search";

function Sidebar() {
  return (
    <div className="sidebar">
      <CategoryPick Icon={BookmarkBorderIcon} text="카테고리" />
      <Search Icon={SearchIcon} text="검색하기" />
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Booya!
      </Button>
    </div>
  );
}

export default Sidebar;
