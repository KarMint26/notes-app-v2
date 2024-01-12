import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNotes from "./pages/AddNotes";
import DetailNotes from "./pages/DetailNotes";
import Archieves from "./pages/Archieves";
import Page404 from "./pages/Page404";
import EditNotes from "./pages/EditNotes";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes/new" element={<AddNotes />} />
      <Route path="/notes/:id" element={<DetailNotes />} />
      <Route path="/notes/archieves" element={<Archieves />} />
      <Route path="/notes/edit/:id" element={<EditNotes />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
