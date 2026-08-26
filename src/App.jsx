import { BrowserRouter, Route, Routes } from "react-router-dom"
import Daud from "./Daud"
import Home from "./Home"
import Ds from "./Ds"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daud" element={<Daud />} />
        <Route path="/Ds" element={<Ds />} />


        <Route path="*" element={<h1>404 — Страница не найдена</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
