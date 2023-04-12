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

export default function TournoiInfo() {
  const { id_tournois } = useParams();
  const url = "https://keran.alwaysdata.net/api/tournois/" + id_tournois;
  const [infoTournoi, setTournoi] = useState({});

  useEffect(() => {
    getTournoi();
  }, []);

  function getTournoi() {
    const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((dataJSON) => {
        setTournoi(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <ul className="listeInfo">
        <li>{infoTournoi.nom_tournois}</li>
        <li>Max slots: {infoTournoi.slotes}</li>
        {/* <li>Free slots: infoTournoi.free_slots}</li> */}
        <li>Rank: {infoTournoi.ranks}</li>
        <li>Price: {infoTournoi.recompense}</li>
      </ul>
    </div>
  );
}
