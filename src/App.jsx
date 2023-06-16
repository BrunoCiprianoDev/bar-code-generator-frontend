import { BrowserRouter, Routes, Route } from "react-router-dom"

import Register from "./pages/register/Register"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
