
import { useState } from "react";
import { Card, CardContent } from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "./Button";
import templado1 from '../assets/imagenesTempaldos/templado1.jpeg'
import templado2 from '../assets/imagenesTempaldos/templado2.jpg'
import espejo1 from '../assets/espejos/espejo1.jpg'
import espejo2 from '../assets/espejos/espejo2.webp'
import aluminio1 from '../assets/ventanaAluminio/aluminio1.jpeg'
import aluminio2 from '../assets/ventanaAluminio/aluminio2.jpeg'
import teja1 from '../assets/tejas/tejas1.jpeg'
import teja2 from '../assets/tejas/tejas2.jpeg'
import termo1 from '../assets/vidrioTermoAcustico/termo1.jpg'
import termo2 from '../assets/vidrioTermoAcustico/termo2.png'



const serviciosData = [
    {
        titulo: "Vidrios templados y de seguridad",
        descripcion: "Instalación de vidrios templados en interiores y exteriores, con acabados seguros y elegantes.",
        descripcionExtendida: "Contamos con equipos certificados y experiencia en obras residenciales y comerciales. Nuestros trabajos garantizan seguridad estructural, aislamiento térmico y estética.",
        imagenes: [templado1, templado2]
    },
    {
        titulo: "Espejos de todo tipo",
        descripcion: "Diseños a medida, instalación profesional en baños, salas y espacios comerciales.",
        descripcionExtendida: "Fabricamos espejos con acabados pulidos, biselados y personalizados según el estilo del cliente. Instalación rápida y sin complicaciones.",
        imagenes: [espejo1, espejo2]
    },
    {
        titulo: "Divisiones para baño",
        descripcion: "Divisiones en vidrio templado con herrajes de alta calidad y acabados modernos.",
        descripcionExtendida: "Ofrecemos divisiones en vidrio templado diseñadas a medida para baños y espacios interiores. Utilizamos herrajes de alta calidad, resistentes a la humedad y al desgaste, garantizando seguridad, durabilidad y una estética moderna.",
        imagenes: ['/divisionesBano/division1.jpeg','/divisionesBano/division2.png']
    },
    {
        titulo: "Ventaneria en aluminio",
        descripcion: "Ofrecemos fabricación e instalación de ventanas en aluminio de alta resistencia, ideales para todo tipo de espacios.",
        descripcionExtendida: "Fabricamos e instalamos ventanas en aluminio de alta resistencia, diseñadas a medida para adaptarse a todo tipo de espacios residenciales, comerciales o industriales. Nuestro servicio garantiza durabilidad, aislamiento térmico y un acabado estético moderno. Utilizamos materiales de primera calidad y ofrecemos asesoría personalizada para lograr soluciones funcionales y elegantes.",
        imagenes: [aluminio1,aluminio2]
    },
    {
        titulo: "Cambio y reparación de tejas",
        descripcion: "Cambio y reparación de tejas dañadas para evitar filtraciones y proteger tu hogar.",
        descripcionExtendida: "Realizamos el cambio y la reparación de tejas en mal estado, previniendo filtraciones y daños estructurales. Utilizamos materiales duraderos y técnicas seguras para proteger tu hogar de la humedad, garantizando una cobertura resistente y un acabado limpio y funcional.",
        imagenes: [teja1,teja2]
    },
    {
        titulo: "Vidrios termo acusticos",
        descripcion: "Instalación de vidrios termo acústicos que aíslan ruido y regulan la temperatura interior.",
        descripcionExtendida: "Ofrecemos instalación de vidrios termo acústicos de alta eficiencia, ideales para reducir el ruido exterior y mantener una temperatura interior confortable. Son perfectos para hogares y oficinas que buscan confort, aislamiento y un ambiente más silencioso y energéticamente eficiente.",
        imagenes: [termo1,termo2]
    },
    {
        titulo: "Vidrios templados y de seguridad",
        descripcion: "Instalación de vidrios templados en interiores y exteriores, con acabados seguros y elegantes.",
        descripcionExtendida: "Contamos con equipos certificados y experiencia en obras residenciales y comerciales. Nuestros trabajos garantizan seguridad estructural, aislamiento térmico y estética.",
        imagenes: [templado1, templado2]
    },
    {
        titulo: "Divisiones para baño",
        descripcion: "Divisiones en vidrio templado con herrajes de alta calidad y acabados modernos.",
        descripcionExtendida: "Ofrecemos divisiones en vidrio templado diseñadas a medida para baños y espacios interiores. Utilizamos herrajes de alta calidad, resistentes a la humedad y al desgaste, garantizando seguridad, durabilidad y una estética moderna.",
        imagenes: ['/divisionesBano/division1.jpeg','/divisionesBano/division2.png']
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
                    spaceBetween={16}
                    slidesPerView={1}
                    centeredSlides
                    loop
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    className="max-auto px-2 sm:px-4"
                    breakpoints={{       
                        640: { slidesPerView: 1.5 },    
                        768: { slidesPerView: 2 },       
                        1024: { slidesPerView: 2.5 },    
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {serviciosData.map((servicio, index) => {
                        const isActive = servicioActivo?.titulo === servicio.titulo;
                        return (
                            <SwiperSlide key={index} className="flex justify-center">
                                <div
                                    className={`transition-all duration-500 w-[90vw] sm:w-75 md:w-80 ${isActive ? "scale-105" : "scale-90 opacity-100"}`}
                                >
                                    <Card className={`bg-BgHeader shadow-md p-4 rounded-lg px-2 sm:px-4 transition-all duration-300 ${isActive ? "ring-4 ring-white" : ""}`}>
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
