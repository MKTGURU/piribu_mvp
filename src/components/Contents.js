import React, { useEffect, useState } from "react";
import "../css/Contents.css";
import Post from "./Post";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../fbase";

function Contents({ userObj }) {
  const [feeds, setfeeds] = useState([]);
  const getFeeds = async () => {
    const querySnapshot = await getDocs(collection(dbService, "feedtext"));
    querySnapshot.forEach((doc) => {
      const feedObj = {
        ...doc.data(),
        id: doc.id,
      };
      setfeeds((prev) => [feedObj, ...prev]);
    });
  };
  useEffect(() => {
    getFeeds();
  }, []);
  console.log(feeds);
  return (
    <div className="Contents">
      <div className="Contents_header"></div>
      <div>
        {feeds.map((feedtext) => (
          <div key={feeds.id}>
            <h4>
              <Post
                feedtext={feedtext.feedtext}
                userEmail={feedtext.userEmail}
                createdAt={feedtext.createdAt}
              />
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contents;
