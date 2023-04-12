import * as React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Container from "@mui/material/Container";

export default function Appartenir() {
  const { id_joueur } = useParams();
  const url = "https://keran.alwaysdata.net/api/appartenir/equipe/" + id_joueur;
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
        <Container component="main">
          <main>
            <div className="team-profile d-flex align-items-center">
              <div className="profile-pic rounded-circle me-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY9aOTRl5d66nmDvvwaOVm1TQQvlSOtWGhA&usqp=CAU"></img>
              </div>
              <div className="team-details ">
                <h2 className="team-name">{f.nom_equipe}</h2>
                <p className="member-since">{f.date_creation}</p>
                <p className="member-since">Points: {f.points}</p>
              </div>
            </div>
          </main>
        </Container>
      ))}
    </div>
  );
}
