import Image from "next/image";

export default function NewsLetter() {
  return (
    <section id="novedades" aria-labelledby="news-title" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative aspect-4/3 w-full sm:aspect-8/3">
          <Image src="/images/newsletter/hero-newsletter.png" alt="Historias que nacen en la viña" fill sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(100vw - 64px), 1216px" className="object-cover" />
        </div>
        <div className="grid min-w-0 items-start gap-6 bg-[#F5EBDA] p-5 sm:p-8 lg:grid-cols-[140px_1fr] lg:gap-10 lg:p-10">
          <Image src="/images/logo.svg" alt="" width={140} height={140} className="h-auto w-24 shrink-0 lg:w-35" sizes="(max-width: 1024px) 96px, 140px" />
          <div className="min-w-0 max-w-3xl">
            <p className="mb-3 text-sm tracking-widest text-[#8A5200] uppercase">Novedades</p>
            <h2 id="news-title" className="text-3xl leading-tight text-primary sm:text-4xl">Historias que nacen en la viña</h2>
            <p className="mt-5 text-base leading-relaxed text-primary">
              Desde la cosecha hasta tu copa, comparte con nosotros las últimas noticias, eventos y selecciones que reflejan nuestra pasión por el vino.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-primary">
              La suscripción a novedades todavía no está disponible. Mientras tanto, puedes consultar nuestro archivo de eventos.
            </p>
            <a href="#events" className="mt-6 inline-flex min-h-11 items-center justify-center bg-primary px-6 py-3 text-sm text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              Ver eventos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
