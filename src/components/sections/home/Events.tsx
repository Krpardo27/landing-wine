import Image from "next/image";

const events = [
  { id: 1, title: "Tour Viñedo Premium", date: "12 Junio 2026", dateTime: "2026-06-12", time: "10:00 - 13:00", location: "Valle del Maipo", image: "/images/events/event-1.png", bgImage: "/images/events/hero-event-1.png" },
  { id: 2, title: "Cata de Vinos Exclusivos", date: "18 Junio 2026", dateTime: "2026-06-18", time: "19:00 - 22:00", location: "Santiago Centro", image: "/images/events/event-2.png", bgImage: "/images/events/hero-event-2.png" },
  { id: 3, title: "Experiencia Vendimia", date: "25 Junio 2026", dateTime: "2026-06-25", time: "09:00 - 14:00", location: "Valle de Colchagua", image: "/images/events/event-3.png", bgImage: "/images/events/hero-event-3.png" },
];

export default function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="scroll-mt-28 bg-[#F5EBDA]/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm tracking-widest text-[#8A5200] uppercase">Exclusivos · Archivo junio 2026</p>
          <h2 id="events-title" className="text-3xl leading-tight text-primary uppercase sm:text-4xl lg:text-5xl">Conoce nuestros eventos</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary">
            Estos eventos corresponden a junio de 2026 y ya finalizaron. Esta sección es un archivo; no hay reservas disponibles.
          </p>
        </header>
        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col gap-6">
            {events.map((event) => (
              <article key={event.id} className="grid min-w-0 rounded-xl border border-primary/15 bg-[#F5EBDA] sm:grid-cols-[1fr_2fr] lg:grid-cols-1 xl:grid-cols-[1fr_2fr]">
                <div className="relative aspect-4/3 min-w-0 sm:aspect-auto lg:aspect-4/3 xl:aspect-auto">
                  <Image src={event.image} alt={event.title} fill sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 30vw, (max-width: 1280px) 44vw, 187px" className="rounded-t-xl object-cover sm:rounded-none sm:rounded-l-xl lg:rounded-l-none lg:rounded-t-xl xl:rounded-t-none xl:rounded-l-xl" />
                </div>
                <div className="relative isolate min-w-0 p-5 sm:p-6">
                  <Image src={event.bgImage} alt="" fill sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 60vw, (max-width: 1280px) 44vw, 375px" className="-z-20 rounded-xl object-cover" />
                  <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-xl bg-[#F5EBDA]/95" />
                  <h3 className="mb-3 wrap-break-word text-base font-semibold tracking-wide text-primary uppercase">{event.title}</h3>
                  <p className="text-sm leading-relaxed text-primary"><time dateTime={event.dateTime}>{event.date}</time></p>
                  <details className="mt-3 text-sm text-primary">
                    <summary className="min-h-11 cursor-pointer py-3 leading-relaxed underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      Ver detalles<span className="sr-only"> de {event.title}</span>
                    </summary>
                    <dl className="space-y-3 pt-2 leading-relaxed">
                      <div><dt className="font-semibold">Horario</dt><dd>{event.time}</dd></div>
                      <div><dt className="font-semibold">Lugar</dt><dd>{event.location}</dd></div>
                    </dl>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <figure className="min-w-0">
            <div className="relative aspect-4/3 w-full lg:aspect-square">
              <Image src="/images/events/hero-events.png" alt="Experiencias en los viñedos de Chile" fill sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc(100vw - 64px), (max-width: 1280px) calc((100vw - 112px) / 2), 584px" className="rounded-xl object-cover" />
            </div>
            <figcaption className="mt-5 text-primary">
              <p className="text-2xl leading-tight uppercase">Vive la experiencia</p>
              <p className="mt-3 text-sm leading-relaxed">Eventos únicos en los mejores viñedos de Chile</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
