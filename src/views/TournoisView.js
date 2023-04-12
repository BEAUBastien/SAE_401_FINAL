import Tournoi from "../Components/Tournoi.js";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import { useState } from "react";

// import { Link } from "react-router-dom";

export default function ProduitView() {
  const [jeu, setJeu] = useState("?nom_jeu=CS GO");
  let handleClick = (event) => {
    setJeu(event.target.value);
  };

  return (
    <div>
      <div>
        <MDBBtnGroup>
          <MDBBtn color="dark" value="?nom_jeu=CS GO" onClick={handleClick}>
            CSGO
          </MDBBtn>

          <MDBBtn
            color="dark"
            value="?nom_jeu=League of legends"
            onClick={handleClick}
          >
            LOL
          </MDBBtn>
          <MDBBtn color="dark" value="?nom_jeu=valorant" onClick={handleClick}>
            Valorant
          </MDBBtn>
        </MDBBtnGroup>
      </div>

      <br></br>
      <div>
        {" "}
        <Tournoi pjeu={jeu}></Tournoi>
      </div>
    </div>
  );
}
