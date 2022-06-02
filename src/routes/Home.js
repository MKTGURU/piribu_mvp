import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Couplings from "../components/Couplings";
import Header from "../components/Header";
import HomeIcon from "@mui/icons-material/Home";
import Main from "./Main";
import "../css/Home.css";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Main userObj={userObj} />
      ) : (
        <div>
          <Header />
          <Couplings Image={HomeIcon} name="국민" />
        </div>
      )}
    </>
  );
}

export default Home;
