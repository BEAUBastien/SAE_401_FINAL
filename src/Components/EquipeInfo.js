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
import { useParams } from "react-router-dom";

export default function EquipeInfo() {
  const { id_equipe } = useParams();
  const url = "https://keran.alwaysdata.net/api/equipe/" + id_equipe;
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
      <Container component="main">
        <main>
          <div className="team-profile d-flex align-items-center">
            <div className="profile-pic rounded-circle me-3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY9aOTRl5d66nmDvvwaOVm1TQQvlSOtWGhA&usqp=CAU"></img>
            </div>
            <div className="team-details ">
              <h2 className="team-name">{listeEquipe.nom_equipe}</h2>
              <p className="member-since">{listeEquipe.date_creation}</p>
              <p className="member-since">Points: {listeEquipe.points}</p>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}
