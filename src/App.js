import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Calendly from "./components/Calendly/Calendly";

function App() {
  return (
    <div className="wideWrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Calendly />}></Route>
      </Routes>
    </div>
  );
}

export default App;
