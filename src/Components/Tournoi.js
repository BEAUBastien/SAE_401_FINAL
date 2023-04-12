import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tournoi(props) {
  const url = "https://keran.alwaysdata.net/api/tournois";
  const [listeTournois, setTournois] = useState([]);

  useEffect(() => {
    getTournois();
  }, [props.pjeu]);

  function getTournois() {
    const fetchOptions = { method: "GET" };
    // const critere = "jardin";
    fetch(url + props.pjeu, fetchOptions)
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
        <Link to={"/TournoiProfileView/" + f.id_tournois}>
          <Container component="main">
            <main>
              <div class="card-tournoi d-flex align-items-center p-3">
                <img
                  src="https://editors.dexerto.com/wp-content/uploads/2023/03/21/csgo-new-logo-counter-strike.jpg"
                  class="card-img-left flex-shrink-0 me-3"
                  alt="Tournoi Logo"
                ></img>
                <div class="card-body">
                  <h2 class="card-title fs-5">{f.nom_tournois}</h2>
                  <p class="card-text ">Date: {f.date_tournois}</p>
                  <p class="card-text ">Free Stole: {f.slotes}</p>
                </div>
              </div>
            </main>
          </Container>
        </Link>
      ))}
    </div>
  );
}
