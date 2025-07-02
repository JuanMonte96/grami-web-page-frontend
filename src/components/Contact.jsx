import { Button } from "../components/Button";

export const Contact = () => {
    return (
        <>
            {/* Contacto */}
            < section id="contacto" className="py-16" >
                <div className="container mx-auto max-w-xl">
                    <h3 className="text-3xl font-bold text-center mb-6">Contáctanos</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Nombre" className="w-full border p-2 rounded" />
                        <input type="email" placeholder="Correo Electrónico" className="w-full border p-2 rounded" />
                        <input type="number" placeholder="Telefono" className="w-full border p-2 rounded" />
                        <textarea placeholder="Mensaje" className="w-full border p-2 rounded" rows="4"></textarea>
                        <Button className="w-full bg-blue-700 text-white">Enviar Mensaje</Button>
                    </form>
                </div>
            </section >
        </>
    )
}
