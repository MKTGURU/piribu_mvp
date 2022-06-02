import React, { useState } from "react";
import LoginPage from "./LoginPage";
import "../css/CouplingDesign.css";

const Couplings = ({ name, Image }) => {
  const [clicked, setClicked] = useState(false);
  const [clickedName, setClickedName] = useState("");
  const onClick = async () => {
    setClicked((prev) => !prev);
    setClickedName({ name });
  };
  return (
    <div className="CouplingsContainer">
      {clicked ? (
        <LoginPage
          clicked={clicked}
          clickedName={clickedName}
          closeThis={setClicked}
        />
      ) : (
        <div>
          <Image />
          <button onClick={onClick}>{name}</button>
        </div>
      )}
    </div>
  );
};

export default Couplings;
