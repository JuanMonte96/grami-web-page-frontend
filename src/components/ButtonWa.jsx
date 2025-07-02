import { FaWhatsapp } from "react-icons/fa";

export const ButtonWa = () => {
  const phoneNumber = "573162997477"; // Cambia por el número de tu empresa (con código de país, sin +)
  const message = "¡Hola! Estoy interesado en conocer más sobre los servicios de GRAMI.";

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-UseColor hover:bg-ColorHover text-white p-4 rounded-full shadow-lg transition-colors animate-fade-in delay 200 animate-heartbeat"
      aria-label="Chatea por WhatsApp"
    >
        <FaWhatsapp className="w-9 h-9"/>
    </a>
  );
};
