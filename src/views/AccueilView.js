import Container from "@mui/material/Container";
import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

export default function AccueilView() {
  return (
    <div>
      <img
        src="https://www.iim.fr/ecole-web/wp-content/uploads/2018/03/tournoi-esport-1024x513.jpg"
        className="img-fluid shadow-4"
        alt="..."
      />
      <MDBRow
        style={{ marginTop: "20px" }}
        className="row-cols-1 row-cols-md-3 g-4"
      >
        <MDBCol>
          <MDBCard background="dark" className="h-100">
            <MDBCardImage
              src="https://cdn.discordapp.com/attachments/885538382976020581/1095328731435896912/2c328a536ed6fd15d1a164b764600afe965b2fea.jpeg"
              alt="..."
              position="top"
              className="tailleimg"
            />
            <MDBCardBody>
              <Link to={"/Tournois?nom_jeu=CS GO"}>
                <MDBBtn size="lg" color="success opacity-75">
                  CS GO <br /> 5v5
                </MDBBtn>
              </Link>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-white">Nombre de tournois :</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard background="dark" className="h-100">
            <MDBCardImage
              src="https://cdn.discordapp.com/attachments/885538382976020581/1095328928471715911/LOL_PROMOART_14.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <Link to="/Tournois?nom_jeu=League of legends">
                <MDBBtn size="lg" color="success opacity-75">
                  League of legends <br /> 5v5
                </MDBBtn>
              </Link>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-white">Nombre de tournois :</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard background="dark" className="h-100">
            <MDBCardImage
              src="https://cdn.discordapp.com/attachments/885538382976020581/1095328731079393330/Valorant-background-Wallpaper-scaled.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <Link to="/Tournois?=nom_jeu=valorant">
                <MDBBtn size="lg" color="success opacity-75">
                  Valorant <br /> 5v5
                </MDBBtn>
              </Link>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-white">Nombre de tournois :</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
