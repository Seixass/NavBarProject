import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estoque from "../pages/Estoque";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Estoque" element={<Estoque />} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);