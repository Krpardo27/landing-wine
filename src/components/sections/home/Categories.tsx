import Image from "next/image";

const categories = [
  {
    id: 1,
    label: "Colección",
    name: "Botellas",
    src: "/images/categories/cat-1.png",
    alt: "Botella de vino Pinot Noir",
    w: 258,
    h: 272,
  },
  {
    id: 2,
    label: "Experiencia",
    name: "Copa de Vino",
    src: "/images/categories/cat-2.png",
    alt: "Copa de vino tinto",
    w: 123,
    h: 208,
  },
  {
    id: 3,
    label: "Variedades",
    name: "Uvas",
    src: "/images/categories/cat-3.png",
    alt: "Racimo de uvas",
    w: 231,
    h: 175,
  },
  {
    id: 4,
    label: "Regalo",
    name: "Bolsa de Vino",
    src: "/images/categories/cat-4.png",
    alt: "Bolsa de regalo para vino",
    w: 127,
    h: 226,
  },
];

export default function Categories() {
  return (
    <section id="categories" aria-labelledby="categories-title" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-tertiary sm:text-sm">
            Explora Nuestra
          </p>
          <h2 id="categories-title" className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] font-semibold uppercase text-primary">
            Selección Premium
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary/80 sm:text-lg">
            Descubre cada categoría y encuentra el vino perfecto para cada ocasión.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="flex min-w-0 flex-col bg-[#F5EBDA] p-6"
            >
              <div className="flex h-56 items-center justify-center">
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  width={cat.w}
                  height={cat.h}
                  sizes="(max-width: 639px) min(258px, calc(100vw - 88px)), (max-width: 1023px) min(258px, calc((100vw - 184px) / 2)), (max-width: 1279px) calc((100vw - 328px) / 4), 238px"
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                />
              </div>

              <div className="mt-6 border-t border-secondary pt-5">
                <p className="text-xs uppercase tracking-[0.16em] text-tertiary">
                  {cat.label}
                </p>
                <h3 className="mt-2 text-2xl leading-snug font-semibold text-primary">
                  {cat.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}