import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeetCodeInterface from "./components/LeetCodeInterface";
import "./app.css";
import OnlineCompiler from "./components/pages/CompilerPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Add your general routes here */}
          <Route path="/" element={<LeetCodeInterface />} />

          {/* Add your compiler route */}
          <Route path="/compiler" element={<OnlineCompiler />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
