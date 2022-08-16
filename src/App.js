import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Programming from "./pages/Programming";
import GameDesign from "./pages/GameDesign";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/game-design" element={<GameDesign />} />
      </Routes>
    </Layout>
  );
}

export default App;
