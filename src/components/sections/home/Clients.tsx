import Image from "next/image";

const clients = [
  { src: "/images/clients/client-1.png", alt: "Emblema con corona y texto Highest Quality" },
  { src: "/images/clients/client-2.png", alt: "Logotipo con el texto Wine Club" },
  { src: "/images/clients/client-3.png", alt: "Emblema con las iniciales H y T y flechas cruzadas" },
  { src: "/images/clients/client-4.png", alt: "Emblema hexagonal con el texto Vineyard" },
  { src: "/images/clients/client-5.png", alt: "Emblema circular de restaurante con las iniciales F y D" },
  { src: "/images/clients/client-6.png", alt: "Emblema circular con una copa y el texto For Lovers of Food & Wine" },
  { src: "/images/clients/client-7.png", alt: "Emblema con estrellas y la letra R en un recuadro" },
  { src: "/images/clients/client-8.png", alt: "Logotipo con una copa y el texto Wine List" },
];

export default function Clients() {
  return (
    <section aria-labelledby="clients-title" className="bg-[#FFFBF4] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-10 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-tertiary sm:text-sm">
            Conoce a nuestros socios
          </p>
          <h2
            id="clients-title"
            className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] font-semibold uppercase text-primary"
          >
            Nuestros Clientes
          </h2>
        </header>
        <ul className="grid list-none grid-cols-2 gap-px border border-secondary bg-secondary md:grid-cols-4">
          {clients.map((client) => (
            <li
              key={client.src}
              className="flex min-w-0 items-center justify-center bg-[#FFFBF4] p-2 sm:p-4"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={497}
                height={276}
                sizes="(max-width: 639px) calc((100vw - 76px) / 2), (max-width: 767px) calc((100vw - 132px) / 2), (max-width: 1279px) calc((100vw - 200px) / 4), 270px"
                className="h-auto w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
