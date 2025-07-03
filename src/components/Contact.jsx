import { useState } from "react";
import axios from "axios";
import { Button } from "../components/Button";

export const Contact = () => {
    const route = 'http://localhost:3000/api/form/formulario'

    const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    descripcion: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.nombre || !formData.correo || !formData.telefono || !formData.descripcion ) {
      setStatus({ success: false, message: "Por favor completa todos los campos obligatorios." });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      setStatus({ success: false, message: "El correo electrónico no es válido." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post(route, formData);
      if (res.status === 201) {
        setStatus({ success: true, message: "Mensaje enviado con éxito." });
        setFormData({ nombre: "", correo: "", telefono: "", descripcion: "" });
      } else {
        setStatus({ success: false, message: "Hubo un error al enviar el mensaje." });
      }
    } catch (error) {
      setStatus({ success: false, message: error.response?.data?.message || "Error de conexión con el servidor." });
    }
  };

  return (
    <section id="contacto" className="py-16 text-UseColor">
      <div className="container mx-auto max-w-xl">
        <h3 className="text-3xl font-bold text-center mb-6">Contáctanos</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre*"
            className="w-full border p-2 rounded"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico*"
            className="w-full border p-2 rounded"
            value={formData.correo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            className="w-full border p-2 rounded"
            value={formData.telefono}
            onChange={handleChange}
          />
          <textarea
            name="descripcion"
            placeholder="Cuéntanos tu necesidad*"
            className="w-full border p-2 rounded"
            rows="4"
            value={formData.descripcion}
            onChange={handleChange}
          ></textarea>
          <Button type="submit" className="w-full bg-UseColor text-white hover:ColorHover">
            Enviar Mensaje
          </Button>
          {status.message && (
            <p className={`mt-2 text-sm ${status.success ? "text-green-600" : "text-red-600"}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
