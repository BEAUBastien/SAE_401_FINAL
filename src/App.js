import "./styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ResponsiveAppBar from "./views/ResponsiveAppBar";
import AccueilView from "./views/AccueilView";
import TournoisView from "./views/TournoisView";
import EquipeView from "./views/EquipeView";
import CreerTournoisView from "./views/CreerTournoisView";
import CreerEquipeView from "./views/CreerEquipeView";
import ProgTreeView from "./views/ProgTreeView";
import TournoiProfileView from "./views/TournoiProfileView";

import ProfileView from "./views/ProfileView";
import AccountView from "./views/AccountView";
import LogoutView from "./views/LogoutView";
import LoginView from "./views/LoginView";
import IdentView from "./views/IdentView";
import Footer from "./views/Footer";
import Equipes from "./Components/Equipes";
import EquipeProfileView from "./views/EquipeProfileView";
import ProfilPublicView from "./views/ProfilPublicView";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container sx={{ py: 10, minHeight: 500 }} maxWidth="xl">
          <Routes>
            <Route path="/" element={<AccueilView />} />
            <Route path="/tournois" element={<TournoisView />} />
            <Route path="/EquipeView/:id_equipe" element={<EquipeView />} />
            <Route path="/creertournois" element={<CreerTournoisView />} />
            <Route path="/creerequipe" element={<CreerEquipeView />} />
            <Route path="/ProgTreeView" element={<ProgTreeView />} />
            <Route
              path="/TournoiProfileView/:id_tournois"
              element={<TournoiProfileView />}
            />
            <Route
              path="/EquipeProfileView/:id_equipe"
              element={<EquipeProfileView />}
            />
            <Route
              path="/ProfilPublic/:id_joueur"
              element={<ProfilPublicView />}
            />
            <Route path="/equipes" element={<Equipes />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/ident" element={<IdentView />} />
            <Route path="/profil/:id_joueur" element={<ProfileView />} />
            <Route path="/account" element={<AccountView />} />
            <Route path="/logout" element={<LogoutView />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
