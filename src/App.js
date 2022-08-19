import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

function initialGetWindowDimenstions() {
  const { innerWidth: width } = window;
  return !(width < 700);
}

function App() {
  const [showSidebar, setShowSidebar] = useState(() => initialGetWindowDimenstions());
  function getWindowDimenstions() {
    const { innerWidth: width } = window;
    width < 700 ? setShowSidebar(show => false) : setShowSidebar(show => true);
  }

  window.addEventListener('resize', getWindowDimenstions);
  window.addEventListener('resize', initialGetWindowDimenstions);

  return (
    <Layout showSidebar={showSidebar}>
      <Routes>
      <Route path="/" element={<Home fullWidth={showSidebar} />} />
      </Routes>
    </Layout>
  );
}

export default App;
