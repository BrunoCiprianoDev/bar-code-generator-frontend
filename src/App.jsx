import { BrowserRouter, Routes, Route } from "react-router-dom"

import Register from "./pages/register/Register"
import Badge from "./pages/badge/Badge"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/badge" element={<Badge/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

//react-barcode -> biblioteca para a geração dos pdf
//html2pdf.js -> biblioteca para a geração dos pdf
