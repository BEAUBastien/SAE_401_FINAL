import "../styles.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography
} from "mdb-react-ui-kit";

export default function ProgTreeView() {
  return (
    <div className="tree">
      <div className="column">
        <div className="column-header">Pool Match</div>
        <div className="group">
          <div className="match">
            <div className="team winner">Team 1</div>
            <div className="team loser">Team A</div>
            <div className="score">16:12</div>
          </div>
          <div className="match">
            <div className="team winner">Team 2</div>
            <div className="team loser">Team B</div>
            <div className="score">18:16</div>
          </div>
          <div className="match">
            <div className="team loser">Team 3</div>
            <div className="team winner">Team C</div>
            <div className="score">3:16</div>
          </div>
          <div className="match">
            <div className="team loser">Team 4</div>
            <div className="team winner">Team D</div>
            <div className="score">20:22</div>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="column-header">Semi-Finals</div>
        <div className="group">
          <div className="match">
            <div className="team loser">Team 1</div>
            <div className="team winner">Team 2</div>
            <div className="score">10:16</div>
          </div>
          <div className="match">
            <div className="team winner">Team C</div>
            <div className="team loser">Team D</div>
            <div className="score">20:18</div>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="column-header">Final</div>
        <div className="group">
          <div className="match encours">
            <div className="team">Team 2</div>
            <div className="team">Team C</div>
            <div className="score">En cours</div>
          </div>
        </div>
      </div>
    </div>
  );
}
