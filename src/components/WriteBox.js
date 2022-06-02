import React, { useState } from "react";
import "../css/WriteBox.css";
import { Avatar } from "@mui/material";
import { dbService } from "../fbase";
import { collection, addDoc } from "firebase/firestore";

function WriteBox({ userObj }) {
  const [feedtext, setFeedText] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "feedtext"), {
        feedtext: feedtext,
        createdAt: Date.now(),
        userEmail: userObj.email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setFeedText("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setFeedText(value);
  };

  return (
    <div className="WriteBox">
      <form onSubmit={onSubmit}>
        <div className="WriteBox_input">
          <Avatar />
          <input
            value={feedtext}
            onChange={onChange}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input type="submit" className="WriteBox_WriteButton" value="Booya!" />
      </form>
    </div>
  );
}

export default WriteBox;
