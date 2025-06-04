// src/components/Sidebar.jsx

import { FaUserCog, FaTachometerAlt, FaUsers, FaCalendarAlt, FaShoppingCart, FaCogs, FaLock } from "react-icons/fa"
import { RiUserSettingsLine } from "react-icons/ri"
import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
const location = useLocation()

const menuItems = [
    { path: "/admin", label: "Administrador", icon: <FaUserCog /> },
    { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/usuarios", label: "Usuarios", icon: <FaUsers /> },
    { path: "/reservas", label: "Reservas", icon: <FaCalendarAlt /> },
    { path: "/compras", label: "Compras", icon: <FaShoppingCart /> },
    { path: "/roles", label: "Roles", icon: <RiUserSettingsLine /> },
    { path: "/configuracion", label: "Configuración", icon: <FaCogs /> },
    { path: "/acceso", label: "Acceso", icon: <FaLock /> },
]

return (
    <div className="w-56 h-screen bg-[#9B7C5A] text-white flex flex-col items-center py-4">
    <img
        src="/public/img/logo.jpg" // cambia esta ruta por la correcta si tu logo está en otra carpeta
        alt="Logo"
        className="w-28 h-28 object-contain mb-6"
    />
    <ul className="w-full">
        {menuItems.map((item) => (
        <li key={item.path}>
            <Link
            to={item.path}
            className={`flex items-center gap-2 px-4 py-3 hover:bg-[#BFA283] transition ${
                location.pathname === item.path ? "bg-[#7B5A3A]" : ""
            }`}
            >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
            </Link>
        </li>
        ))}
    </ul>
    </div>
)
}

export default Sidebar