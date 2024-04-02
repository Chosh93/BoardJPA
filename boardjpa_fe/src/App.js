import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BoardPage from "./page/BoardPage";
import NavBar from "./common/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/board" element={<BoardPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
