import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Calendly from "./components/Calendly/Calendly";
import EachReservation from "./components/EachReservation";

function App() {
  return (
    <div className="wideWrapper">
      <Routes>
        <Route path="/:name" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>

        <Route path="/:id/reservation" element={<Calendly />}></Route>
      </Routes>
    </div>
  );
}

export default App;
