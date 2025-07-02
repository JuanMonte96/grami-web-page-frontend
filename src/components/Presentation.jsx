import { Button } from "../components/Button";

export const Presentation = () => {
    return (
        <section className="bg-BgSection py-20 text-center animate-fade-in delay-250">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl text-UseColor font-bold mb-4 leading-tight">
                    Protección, diseño y confianza en cada instalación
                </h2>
                <p className="text-lg md:text-xl mb-6 text-base max-w-3xl mx-auto">
                    Somos <b>GRAMI Vidrios y Soluciones S.A.S.</b>, expertos en instalación y reparación de ventanearía con atención inmediata, equipo especializado y soluciones a la medida para hogares, empresas y aseguradoras.
                </p>
                <div className="mb-6">
                    <p className="text-base md:text-lg text-base">
                        Calidad, seguridad y servicio en cada proyecto. Asistencia integral con cobertura en Bogotá y alrededores.
                    </p>
                </div>
                <Button className="bg-UseColor text-white px-6 py-3 text-lg">
                    <a href="#contacto" className="hover:ColorHover">Solicita tu cotización</a>
                </Button>
            </div>
        </section>
    );
};