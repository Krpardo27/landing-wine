import Image from "next/image";

const owners = [
  {
    src: "/images/owners/owner-1.png",
    name: "Juan Pérez",
    role: "Fundador",
    description: "Apasionado por el vino y la tradición.",
  },
  {
    src: "/images/owners/owner-2.png",
    name: "María López",
    role: "Co-Fundadora",
    description: "Innovadora en la producción de vinos.",
  },
  {
    src: "/images/owners/owner-3.png",
    name: "Carlos García",
    role: "Director Ejecutivo",
    description: "Liderando con visión y estrategia.",
  },
  {
    src: "/images/owners/owner-4.png",
    name: "Ana Martínez",
    role: "Enóloga Principal",
    description: "Creando sabores únicos e inolvidables.",
  },
];

export default function Owners() {
  return (
    <section id="socios" aria-labelledby="owners-title" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-10 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-tertiary sm:text-sm">
            Conoce a nuestros socios
          </p>

          <h2
            id="owners-title"
            className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] font-semibold uppercase text-primary"
          >
            Nuestros Propietarios
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {owners.map((owner) => (
            <article key={owner.name} className="min-w-0">
              <div className="relative aspect-309/398 w-full bg-[#F5EBDA]">
                <Image
                  src={owner.src}
                  alt={owner.name}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 88px) / 2), (max-width: 1279px) calc((100vw - 136px) / 4), 286px"
                  className="object-cover"
                />
              </div>

              <div className="pt-5">
                <h3 className="text-xl leading-snug font-semibold tracking-wide uppercase text-primary">
                  {owner.name}
                </h3>

                <p className="mt-2 text-xs leading-relaxed tracking-widest uppercase text-tertiary">
                  {owner.role}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-primary/80">
                  {owner.description}
                </p>
              </div>
              {/* Sin redes: los datos originales solo incluían enlaces a "#". */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
