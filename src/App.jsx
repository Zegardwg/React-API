import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hal1 from "./pages/hal1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hal1 />} />
      </Routes>
    </Router>
  );
}

export default App;
