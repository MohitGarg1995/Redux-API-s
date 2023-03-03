import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Books from "./Pages/Books";
import Characters from "./Pages/Characters";
import Houses from "./Pages/Houses";
import Search from "./Pages/Search";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Books />}></Route>
          <Route exact path="/Characters" element={<Characters />}></Route>
          <Route exact path="/Houses" element={<Houses />}></Route>
          <Route exact path="/Search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
