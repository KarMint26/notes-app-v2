import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AddNotes from "./pages/AddNotes";
import DetailNotes from "./pages/DetailNotes";
import Archieves from "./pages/Archieves";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/new" element={<AddNotes />} />
        <Route path="/notes/:id" element={<DetailNotes />} />
        <Route path="/notes/archieves" element={<Archieves />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
