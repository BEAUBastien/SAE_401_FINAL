import EquipeInfo from "../Components/EquipeInfo";
import EquipePlayer from "../Components/EquipePlayer.js";
import { MDBBtn } from "mdb-react-ui-kit";
import TournoiParticipate from "../Components/TournoiParticipate";

export default function ProduitView() {
  return (
    <div>
      <EquipeInfo></EquipeInfo>
      <div class="equipe_title">
        <h2>Player</h2>
      </div>
      <EquipePlayer></EquipePlayer>
      <br></br>
      <MDBBtn>Rejoindre</MDBBtn>
      <br></br>
      <br></br>
      <MDBBtn>Gérer l'équipe</MDBBtn>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TournoiParticipate></TournoiParticipate>
    </div>
  );
}
