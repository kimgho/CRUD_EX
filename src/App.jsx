import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Find from "./Find";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addForm" element={<Register />} />
        <Route path="/members" element={<Find />} />
      </Routes>
    </Router>
  );
}

export default App;
