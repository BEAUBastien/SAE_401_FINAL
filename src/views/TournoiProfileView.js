import Equipe from "../Components/Equipe.js";
import { MDBBtn } from "mdb-react-ui-kit";
import TournoiInfo from "../Components/TournoiInfo.js";
import { Link } from "react-router-dom";

export default function TournoiProfileView() {
  return (
    <div>
      <TournoiInfo></TournoiInfo>
      <div className="equipe_title">
        <h2>Teams</h2>
      </div>
      <></>
      <br></br>
      <MDBBtn>Rejoindre</MDBBtn>
      <br></br>
      <br></br>
      <MDBBtn>Modifier</MDBBtn>
      <Link to={"/ProgTreeView/"}>
        <p>Test</p>
      </Link>
      <br></br>
    </div>
  );
}
