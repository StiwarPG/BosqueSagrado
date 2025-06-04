// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar"

const Placeholder = ({ title }) => <div className="p-6">{title}</div>

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-[#F5F5F5]">
          <Routes>
            <Route path="/admin" element={<Placeholder title="Administrador" />} />
            <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
            <Route path="/usuarios" element={<Placeholder title="Usuarios" />} />
            <Route path="/reservas" element={<Placeholder title="Reservas" />} />
            <Route path="/compras" element={<Placeholder title="Compras" />} />
            <Route path="/roles" element={<Placeholder title="Roles" />} />
            <Route path="/configuracion" element={<Placeholder title="Configuración" />} />
            <Route path="/acceso" element={<Placeholder title="Acceso" />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App