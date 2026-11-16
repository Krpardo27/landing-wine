import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative isolate overflow-hidden bg-[#F5EBDA] py-16 text-primary"
    >
      <Image
        src="/images/bg-footer.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-contain object-bottom opacity-30"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="#home"
            className="flex items-start gap-3 self-start"
            aria-label="Vin Rouge, volver al inicio"
          >
            <Image
              src="/images/logo-brown.svg"
              alt=""
              width={48}
              height={56}
              className="h-14 w-12 object-contain"
            />
            <span className="pt-3 text-lg font-bold uppercase">Vin Rouge</span>
          </a>
          <div>
            <h2 className="mb-4 text-base font-bold uppercase">Contacto</h2>
            <p className="text-sm leading-7">
              Los datos de contacto y las redes oficiales están pendientes de confirmación.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-base font-bold uppercase">Nosotros</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#historia">Nuestra historia</a>
              </li>
              <li>
                <a href="#conocenos">Viñedos y proceso</a>
              </li>
              <li>
                <a href="#socios">Equipo</a>
              </li>
              <li>
                <a href="#gallery">Galería</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-base font-bold uppercase">Novedades</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#shop">Nuestra selección de vinos</a>
              </li>
              <li>
                <a href="#events">Archivo de eventos</a>
              </li>
              <li>
                <a href="#novedades">Mantente al día</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-primary/25 pt-6 text-xs leading-relaxed">
          <p>© {new Date().getFullYear()} Vin Rouge. Todos los derechos reservados.</p>
          <p>Disfruta del vino de forma responsable.</p>
        </div>
      </div>
    </footer>
  );
}