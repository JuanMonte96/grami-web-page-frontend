import { useState } from "react";
import { Card, CardContent } from "../components/Card";
import { Button } from "./Button";

const proyectsList = [
  {
    titulo: "Conjunto Niza IX",
    descripcion: "Se realizó la renovación total de ventanas en mal estado, instalando nuevas estructuras de aluminio hechas a medida que mejoran tanto la funcionalidad como la estética del espacio. Como parte del proyecto, también se diseñó e implementó una cubierta especial para el cierre superior del domo en la entrada principal de la primera torre, aportando un acabado moderno y elegante.",
    imagenes: ['./imagen1.png']
  },
  {
    titulo: "Consultorios Polo",
    descripcion: "Ejecutamos el diseño e instalación completa de ventanería en vidrio y puertas en vidrio templado de seguridad, creando desde cero un entorno funcional y moderno para el área de consultorios. Este proyecto fue desarrollado pensando en la comodidad, privacidad y seguridad necesarias para la atención de servicios médicos, ofreciendo un espacio elegante y totalmente personalizado.",
    imagenes: ['./imagen2.png']
  },
  {
    titulo: "Ventanas Policentro",
    descripcion: "Transformamos completamente las ventanas individuales que no permitían la ventilación adecuada, rediseñándolas con una solución funcional y estética. Se instalaron nuevas ventanas divididas con secciones abatibles que facilitan la circulación del aire, mejorando el confort interior sin comprometer el diseño del espacio..",
    imagenes: ['./imagen3.png']
  },
  {
    titulo: "División de baño residencial",
    descripcion: "Reemplazamos una antigua división de baño en acrílico, con estructura oxidada, por una nueva instalación en aluminio resistente a la corrosión y vidrio templado de seguridad. El resultado: un espacio más moderno, duradero y elegante, pensado para brindar funcionalidad y estilo a largo plazo.",
    imagenes: ['./imagen4.png']
  }

]

export const Proyects = () => {
  const [proyectoActivo, setProyectoActivo] = useState(null);

  return (
    <section id="proyectos" className="py-16 bg-BgSection animate-fade-in delay-200">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8 text-UseColor">Proyectos Realizados</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectsList.map((proyecto, index) => {
            const isActive = proyectoActivo === index;
            return (
              <Card
                key={index}
                className={`p-4 transition-all duration-500 bg-white shadow-md rounded-lg ${isActive ? "md:col-span-2" : ""}`}
              >
                <CardContent>
                  <h4 className="text-xl font-bold text-UseColor mb-2 text-center">{proyecto.titulo}</h4>
                  <p className="text-sm text-gray-700 mb-4 text-center">{proyecto.descripcion}</p>

                  {isActive && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      {proyecto.imagenes.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Imagen ${i + 1} de ${proyecto.titulo}`}
                          className="w-full h-32 object-cover rounded"
                        />
                      ))}
                    </div>
                  )}

                  <div className="text-center">
                    <Button
                      className="bg-UseColor text-white font-semibold px-6 py-2 text-sm"
                      onClick={() =>
                        setProyectoActivo(isActive ? null : index)
                      }
                    >
                      {isActive ? "CERRAR" : "CONOCE MÁS"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};


