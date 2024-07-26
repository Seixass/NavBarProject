import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estoque from "../pages/Estoque";
import Graficos from "../pages/Graficos";
import Home from "../pages/Home";
import Agendamento from "../pages/Agendamento"
import RelatoriosDiario from "../pages/RelatoriosDiario"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Estoque" element={<Estoque />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Graficos" element={<Graficos />} />
          <Route path="/Agendamento" element={<Agendamento />} />
          <Route path="/RelatoriosDiario" element={<RelatoriosDiario />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);