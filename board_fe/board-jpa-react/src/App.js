import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ArrTest from "./page/ArrTest";
import Home from "./page/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<ArrTest/>}/>
      </Routes>
    </Router>
  );
}

export default App;
