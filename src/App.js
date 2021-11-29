import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Calendly from "./components/Calendly/Calendly";
import Therapist from "./components/therapist";
import { useState } from "react";

function App() {
  const [PTInfo, setPTInfo] = useState([
    { name: "최봉수", id: "11t518s20161759" },
    { name: "송영진", id: "jesusfingers12" },
    { name: "임규민", id: "kmlim5122" },
  ]);

  return (
    <div className="wideWrapper">
      <Routes>
        <Route path="/:name" element={<Home PTInfo={PTInfo} />}></Route>
        <Route path="/" element={<Home PTInfo={PTInfo} />}></Route>
        <Route
          path="/:name/reservation"
          element={<Calendly PTInfo={PTInfo} />}
        ></Route>
        <Route
          path="/:name/admin"
          element={<Therapist PTInfo={PTInfo} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
