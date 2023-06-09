import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"

import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import NuevoPass from "./paginas/NuevoPass"
import OlvidePass from "./paginas/OlvidePass"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<OlvidePass />} />
          <Route path="olvide-password/:token" element={<NuevoPass />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
