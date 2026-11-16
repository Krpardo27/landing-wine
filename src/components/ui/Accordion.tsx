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
  return (
    <div className="w-full min-w-0 border-y border-secondary">
      {items.map((item, idx) => (
        <details
          key={item.title}
          name="wine-about"
          open={idx === 0}
          className="group border-b border-secondary last:border-b-0"
        >
          <summary
            className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-primary hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden"
          >
            <span className="min-w-0 flex-1 text-sm leading-relaxed font-semibold wrap-break-word sm:text-base">
              {item.title}
            </span>

            <span aria-hidden="true" className="relative size-4 shrink-0 text-tertiary">
              <span className="absolute top-1/2 left-0 h-px w-full bg-current" />
              <span className="absolute top-0 left-1/2 h-full w-px bg-current group-open:hidden" />
            </span>
          </summary>

          <p className="pb-5 pr-8 text-sm leading-relaxed wrap-break-word text-primary/80 sm:text-base">
            {item.content}
          </p>
        </details>
      ))}
    </div>
  );
}
