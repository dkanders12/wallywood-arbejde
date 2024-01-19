import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Plakater } from "./pages/Plakater/Plakater";
import { OmOs } from "./pages/Om-os/Om";
import { Kontakt } from "./pages/Kontakt/Kontakt";
import { Login } from "./pages/Login/Login";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Plakater" element={<Plakater />} />
        <Route path="/OmOs" element={<OmOs />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
