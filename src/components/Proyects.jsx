import { Card, CardContent } from '../components/Card';

export const Proyects = () => {
  return (
  <>
    {/* Proyectos */}
    < section id="proyectos" className="py-16" >
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Proyectos Realizados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <CardContent>
              <h4 className="font-bold">Oficinas ABC</h4>
              <p>Instalación completa de divisiones en vidrio templado.</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent>
              <h4 className="font-bold">Residencia El Lago</h4>
              <p>Espejos decorativos y ventanales de seguridad 3+3 incoloros.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section >
  </>
  )
}

