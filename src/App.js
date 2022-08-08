import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Programming from "./pages/Programming";
import GameDesign from "./pages/GameDesign";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/programming" element={<Programming />} />
        <Route path="/game-design" element={<GameDesign />} />
      </Routes>
    </Layout>
  );
}

export default App;
