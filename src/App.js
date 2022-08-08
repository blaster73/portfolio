import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Programming from "./pages/Programming";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Programming />} />
      </Routes>
    </Layout>
  );
}

export default App;
