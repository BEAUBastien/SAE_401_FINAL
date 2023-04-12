import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function CreerTournois() {
  const url = "https://keran.alwaysdata.net/api/tournois";
  const games = [
    {
      value: "CS GO",
      label: "CS GO"
    },
    {
      value: "League of legends",
      label: "League of legends"
    },
    {
      value: "Valorant",
      label: "Valorant"
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("nom_tournois")
    });
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const fetchOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        nom_tournois: data.get("nom_tournois"),
        date_tournois: data.get("date_tournois"),
        recompense: data.get("recompense"),
        ranks: data.get("ranks"),
        slotes: data.get("slotes"),
        nom_jeu: data.get("nom_jeu")
      }) // les nvelles valeurs du produit
    };

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
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Creer un tournoi
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nom_tournois"
            label="Nom"
            name="nom_tournois"
            autoComplete="nom_tournois"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="date_tournois"
            label="Date"
            type="date"
            id="date_tournois"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="recompense"
            label="Recompense"
            type="number"
            id="recompense"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="ranks"
            label="Ranks"
            name="ranks"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="slotes"
            label="Slotes"
            type="number"
            name="slotes"
          />

          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue=""
            helperText="Selection du jeu"
            name="nom_jeu"
          >
            {games.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Creer
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
