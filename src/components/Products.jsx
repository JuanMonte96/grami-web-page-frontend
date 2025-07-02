
import { useState } from "react";
import { Card, CardContent } from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "./Button";

const serviciosData = [
    {
        titulo: "Vidrios templados y de seguridad",
        descripcion: "Instalación de vidrios templados en interiores y exteriores, con acabados seguros y elegantes.",
        descripcionExtendida: "Contamos con equipos certificados y experiencia en obras residenciales y comerciales. Nuestros trabajos garantizan seguridad estructural, aislamiento térmico y estética.",
        imagenes: ["/trabajos/templado1.jpg", "/trabajos/templado2.jpg"]
    },
    {
        titulo: "Espejos de todo tipo",
        descripcion: "Diseños a medida, instalación profesional en baños, salas y espacios comerciales.",
        descripcionExtendida: "Fabricamos espejos con acabados pulidos, biselados y personalizados según el estilo del cliente. Instalación rápida y sin complicaciones.",
        imagenes: ["/trabajos/espejo1.jpg", "/trabajos/espejo2.jpg"]
    },
    {
        titulo: "Divisiones para baño",
        descripcion: "Divisiones en vidrio templado con herrajes de alta calidad y acabados modernos.",
        descripcionExtendida: "",
        imagenes: ["/trabajos/baño1.jpg"]
    },
    {
        titulo: "Ventaneria en aluminio",
        descripcion: "Ofrecemos fabricación e instalación de ventanas en aluminio de alta resistencia, ideales para todo tipo de espacios.",
        descripcionExtendida: "",
        imagenes: ["/trabajos/baño1.jpg"]
    },
    {
        titulo: "Cambio y reparación de tejas",
        descripcion: "Cambio y reparación de tejas dañadas para evitar filtraciones y proteger tu hogar.",
        descripcionExtendida: "",
        imagenes: ["/trabajos/baño1.jpg"]
    },
    {
        titulo: "Vidrios termo acusticos",
        descripcion: "Instalación de vidrios termo acústicos que aíslan ruido y regulan la temperatura interior.",
        descripcionExtendida: "",
        imagenes: ["/trabajos/baño1.jpg"]
    },
    {
        titulo: "Vidrios templados y de seguridad",
        descripcion: "Instalación de vidrios templados en interiores y exteriores, con acabados seguros y elegantes.",
        descripcionExtendida: "Contamos con equipos certificados y experiencia en obras residenciales y comerciales. Nuestros trabajos garantizan seguridad estructural, aislamiento térmico y estética.",
        imagenes: ["/trabajos/templado1.jpg", "/trabajos/templado2.jpg"]
    },
    {
        titulo: "Espejos de todo tipo",
        descripcion: "Diseños a medida, instalación profesional en baños, salas y espacios comerciales.",
        descripcionExtendida: "Fabricamos espejos con acabados pulidos, biselados y personalizados según el estilo del cliente. Instalación rápida y sin complicaciones.",
        imagenes: ["/trabajos/espejo1.jpg", "/trabajos/espejo2.jpg"]
    },
];

export const Products = () => {
    const [servicioActivo, setServicioActivo] = useState(null);

    return (
        <section id="servicios" className="py-16 bg-BgHeader overflow-x-hidden animate-fade-in delay-200">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center text-UseColor mb-8">Nuestros Servicios</h3>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={8}
                    slidesPerView={3}
                    centeredSlides
                    loop
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    className="max-w-5xl mx-auto"
                    breakpoints={{
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.2 },
                    }}
                >
                    {serviciosData.map((servicio, index) => {
                        const isActive = servicioActivo?.titulo === servicio.titulo;
                        return (
                            <SwiperSlide key={index} className="flex justify-center">
                                <div
                                    className={`transition-all duration-500 w-full max-w-md ${isActive ? "scale-105" : "scale-90 opacity-70"}`}
                                >
                                    <Card className={`bg-BgHeader shadow-md p-4 rounded-lg transition-all duration-300 ${isActive ? "ring-4 ring-white" : ""}`}>
                                        <CardContent>
                                            <h4 className="text-xl text-center font-semibold mb-2 text-UseColor">{servicio.titulo}</h4>
                                            <p className="text-sm text-center text-black mb-4">
                                                {isActive ? servicio.descripcionExtendida : servicio.descripcion}
                                            </p>
                                            {isActive && (
                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    {servicio.imagenes.map((img, i) => (
                                                        <img
                                                            key={i}
                                                            src={img}
                                                            alt={`Trabajo ${i + 1}`}
                                                            className="w-full h-28 object-cover rounded-md"
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                            <div className="text-center">
                                                <Button
                                                    className="bg-UseColor text-white hover:ColorHover font-bold px-6 py-2 text-sm mx-auto"
                                                    onClick={() =>
                                                        setServicioActivo(
                                                            isActive ? null : servicio
                                                        )
                                                    }
                                                >
                                                    {isActive ? "CERRAR" : "CONOCE MÁS"}
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="custom-pagination mt-6"></div>
            </div>
        </section>
    );
};
