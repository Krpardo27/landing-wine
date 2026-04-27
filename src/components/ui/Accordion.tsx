import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const items = [
  {
    title: "El Origen de Nuestras Bebidas",
    content:
      "Descubre la historia y procedencia de cada uno de nuestros vinos, seleccionados de las mejores regiones vitivinícolas.",
  },
  {
    title: "¿Dónde Puedes Degustar Nuestras Bebidas?",
    content:
      "Visítanos en nuestras sucursales o en eventos exclusivos para disfrutar de una experiencia única de cata.",
  },
  {
    title: "Predicción de Calidad del Vino",
    content:
      "Utilizamos tecnología avanzada para garantizar la calidad de cada botella que ofrecemos.",
  },
  {
    title: "Conoce Más Sobre Nosotros",
    content:
      "Somos apasionados del vino y nos dedicamos a compartir nuestra pasión con cada cliente.",
  },
  {
    title: "Compromiso con la Sostenibilidad",
    content:
      "Trabajamos con productores responsables y promovemos prácticas sostenibles en toda nuestra cadena de valor.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number>(0); // Primer ítem abierto

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="w-full border border-primary overflow-hidden shadow">
      {items.map((item, idx) => (
        <div key={idx} className={`border-b border-primary last:border-b-0`}>
          <button
            className="w-full text-left py-4 px-5 font-semibold text-primary focus:outline-none flex justify-between items-center transition-colors"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`accordion-content-${idx}`}
          >
            {item.title}
            <span className="ml-2 text-lg border border-primary rounded-full p-2">
              {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {openIndex === idx && (
            <div
              id={`accordion-content-${idx}`}
              className="px-5 pb-5 text-tertiary animate-fadeIn"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
