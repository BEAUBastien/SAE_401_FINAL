import * as React from "react";

import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function EquipePlayer() {
  const { id_equipe } = useParams();
  const url = "https://keran.alwaysdata.net/api/appartenir/" + id_equipe;
  const [listeEquipe, setEquipe] = useState([]);

  useEffect(() => {
    getTournois();
  }, []);

  function getTournois() {
    const fetchOptions = { method: "GET" };
    // const critere = "jardin";
    fetch(url, fetchOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setEquipe(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {listeEquipe.map((f) => (
        <Link to={"/profilpublic/" + f.id_joueur}>
          <Container component="main">
            <main>
              <div class="team-player d-flex align-items-center">
                <div class="player-pic rounded-circle me-3">
                  <img src={f.img}></img>
                </div>
                <div class="team-palyer-details ">
                  <h2 class="palyer-name">{f.pseudo}</h2>
                </div>
              </div>
            </main>
          </Container>
        </Link>
      ))}
    </div>
  );
}
