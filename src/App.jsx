import React from "react";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MinPage from "./components/min page/MinPage";
import Portfolio from "./components/portfolio/Portfolio";
import Yngilikalr from "./components/yangliklar/Yngilikalr";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<MinPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/yangliklar" element={<Yngilikalr />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
