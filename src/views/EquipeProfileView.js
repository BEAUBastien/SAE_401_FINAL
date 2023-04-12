import Equipe from "../Components/Equipe.js";
import { MDBBtn } from "mdb-react-ui-kit";
import EquipeInfo from "../Components/EquipeInfo.js";
import EquipePlayer from "../Components/EquipePlayer.js";
import TournoiParticipate from "../Components/TournoiParticipate.js";
import { Link } from "react-router-dom";

export default function EquipeProfileView() {
  return (
    <div>
      <EquipeInfo></EquipeInfo>
      <div class="equipe_title">
        <h2>Player</h2>
      </div>
      <EquipePlayer></EquipePlayer>
      <div class="equipe_title">
        <h2>Tournois participés</h2>
      </div>
      <TournoiParticipate></TournoiParticipate>
    </div>
  );
}
