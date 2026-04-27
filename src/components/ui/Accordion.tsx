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
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="w-full max-w-full border border-primary overflow-hidden shadow box-border">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-primary last:border-b-0">
          <button
            className="w-full text-left py-4 px-5 font-semibold text-primary focus:outline-none flex justify-between items-center transition-colors gap-4"
            onClick={() => toggle(idx)}
          >
            {/* El texto debe poder envolverse (wrap) si es muy largo */}
            <span className="flex-1 text-sm sm:text-base leading-tight break-words">
              {item.title}
            </span>

            {/* El icono no debe encogerse (flex-shrink-0) */}
            <span className="flex-shrink-0 text-xs sm:text-lg border border-primary rounded-full p-1 sm:p-2">
              {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>

          {openIndex === idx && (
            <div
              id={`accordion-content-${idx}`}
              className="px-5 pb-5 text-tertiary animate-fadeIn text-sm sm:text-base break-words"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
