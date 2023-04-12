import * as React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Container from "@mui/material/Container";

export default function Tournoi() {
  const { id_equipe } = useParams();
  const url = "https://keran.alwaysdata.net/api/appartenir/" + id_equipe;
  const [listeTournois, setTournois] = useState([]);

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
        setTournois(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {listeTournois.map((f) => (
        <Link to={"/profilpublic/" + f.id_joueur}>
          <Container component="main">
            <main>
              <div class="card-tournoi d-flex align-items-center p-3">
                <img
                  src="https://editors.dexerto.com/wp-content/uploads/2023/03/21/csgo-new-logo-counter-strike.jpg"
                  class="card-img-left flex-shrink-0 me-3"
                  alt="Tournoi Logo"
                ></img>
                <div class="card-body">
                  <h2 class="card-title fs-5">Tournoi Name</h2>
                  <p class="card-text ">1st</p>
                </div>
              </div>
            </main>
          </Container>
        </Link>
      ))}
    </div>
  );
}
