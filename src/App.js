import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Calendly from "./components/Calendly";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Calendly />}></Route>
      </Routes>
    </div>
  );
}

export default App;
