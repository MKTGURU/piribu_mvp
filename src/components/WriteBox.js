import React, { useState } from "react";
import "../css/WriteBox.css";
import { Avatar } from "@mui/material";
import { dbService } from "../fbase";
import { collection, addDoc } from "firebase/firestore";

function WriteBox({ userObj }) {
  const [feedtext, setFeedText] = useState("");
  const [attachment, setAttachment] = useState();
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
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const fileReader = new FileReader();
    fileReader.onload = (finishedEvent) => {
      console.log(finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    fileReader.readAsDataURL(theFile);
  };
  const onClearClick = () => {
    setAttachment(null);
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
          <input accept="image/*" onChange={onFileChange} type="file" />
          {attachment && (
            <div>
              <img src={attachment} width="100px" height="100px" />
              <button onClick={onClearClick}>지울랭</button>
            </div>
          )}
        </div>
        <input type="submit" className="WriteBox_WriteButton" value="Booya!" />
      </form>
    </div>
  );
}

export default WriteBox;