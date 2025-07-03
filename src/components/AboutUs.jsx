export const AboutUs = () => {
  return (
    <section id="sobre" className="bg-BgHeader py-16 animate-fade-in delay 200">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-6 text-UseColor">Sobre Nosotros</h3>

        <p className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
          En <strong>GRAMI Vidrios y Soluciones S.A.S.</strong> contamos con más de una década de experiencia ofreciendo soluciones en vidriería y estructuras de aluminio. Nos especializamos en la instalación y reparación de ventanearía, cubiertas, divisiones de baño, vidrios de seguridad y proyectos personalizados para hogares, comercios y aseguradoras.
        </p>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-800 leading-relaxed">
          Nos destacamos por nuestra <strong>respuesta inmediata</strong>, <strong>personal altamente capacitado</strong> y el uso de <strong>herramientas especializadas</strong> que nos permiten trabajar incluso en alturas o situaciones complejas. Somos aliados estratégicos de empresas, arquitectos y aseguradoras que buscan calidad, cumplimiento y estética en cada detalle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-bold text-UseColor mb-2">Misión</h4>
            <p className="text-gray-700 text-base">
              Brindar soluciones innovadoras en vidriería y aluminio, con altos estándares de calidad, seguridad y servicio, adaptadas a las necesidades de hogares, negocios e instituciones.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-bold text-UseColor mb-2">Visión</h4>
            <p className="text-gray-700 text-base">
              Ser reconocidos como la empresa líder en soluciones de vidrio en Colombia, destacándonos por nuestra innovación, cumplimiento y compromiso con nuestros clientes y aliados.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-bold text-UseColor mb-2">Valores</h4>
            <ul className="list-disc list-inside text-gray-700 text-base">
              <li>Respeto y responsabilidad</li>
              <li>Comunicación clara</li>
              <li>Compromiso y eficiencia</li>
              <li>Orientación al cliente</li>
              <li>Vocación de servicio</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};