import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Find from "./Find";
import Home from "./Home";
import Edit from "./Edit";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addForm" element={<Register />} />
        <Route path="/members" element={<Find />} />
        <Route path="/members/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
