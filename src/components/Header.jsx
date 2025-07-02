import { useState } from "react";
import logo from "../assets/FINAL Logo Grami 4.0.webp";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-BgHeader text-UseColor shadow-md relative overflow-hidden">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo"
                        className="max-h-32 sm:max-h-40 w-auto animate-fade-in delay-200" />
                </div>

                {/* <div className="animate-bounce text-3xl text">
                    ¿Funciona bounce?
                </div> */}

                {/* Menú navegación: visible en escritorio */}
                <nav className="hidden md:flex space-x-6 text-base font-medium animate-fade-in delay-200">
                    <a href="#servicios" className="hover:text-ColorHover">Servicios</a>
                    <a href="#proyectos" className="hover:text-ColorHover">Proyectos</a>
                    <a href="#sobre" className="hover:text-ColorHover">Sobre Nosotros</a>
                    <a href="#contacto" className="hover:text-ColorHover">Contacto</a>
                </nav>

                {/* Botón hamburguesa: visible solo si el menú está cerrado */}
                {!menuOpen && (
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="text-TextHeader focus:outline-none text-3xl animate-fade-in delay-300"
                            aria-label="Abrir menú"
                        >
                            ☰
                        </button>
                    </div>
                )}
            </div>

            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="md:hidden fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300"
                />
            )}

            {/* Menú móvil desplegable siempre presente */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-BgHeader z-50 p-6 pt-12 space-y-6 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Botón de cierre dentro del menú */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-4 right-4 text-UseColor text-3xl focus:outline-none"
                    aria-label="Cerrar menú"
                >
                    ✕
                </button>

                <a href="#servicios" className="block hover:text-ColorHover" onClick={() => setMenuOpen(false)}>Servicios</a>
                <a href="#proyectos" className="block hover:text-ColorHover" onClick={() => setMenuOpen(false)}>Proyectos</a>
                <a href="#sobre" className="block hover:text-ColorHover" onClick={() => setMenuOpen(false)}>Sobre Nosotros</a>
                <a href="#contacto" className="block hover:text-ColorHover" onClick={() => setMenuOpen(false)}>Contacto</a>
            </div>
        </header>
    );
};
