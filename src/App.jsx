import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AddNotes from "./pages/AddNotes";
import DetailNotes from "./pages/DetailNotes";
import Archieves from "./pages/Archieves";
import Page404 from "./pages/Page404";

function App() {
 const location = useLocation();
 const is404 = location.pathname === "/404";

 return (
   <div className="mb-10">
     {!is404 && <Navigation />}
     <div className="mt-20">
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/notes/new" element={<AddNotes />} />
         <Route path="/notes/:id" element={<DetailNotes />} />
         <Route path="/notes/archieves" element={<Archieves />} />
         <Route path="/*" element={<Page404 />} />
       </Routes>
     </div>
   </div>
 );
}

export default App;
