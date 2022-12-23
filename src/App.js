import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import Error404 from "./components/Error404";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </>
  );
};

export default App;
