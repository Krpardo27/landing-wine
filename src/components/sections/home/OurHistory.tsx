import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function OurHistory() {
  return (
    <section id="historia" aria-labelledby="history-title" className="w-full scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-tertiary sm:text-sm">
            NUESTRA HISTORIA
          </p>
          <h2
            id="history-title"
            className="max-w-[20ch] text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] font-semibold uppercase text-primary"
          >
            Desde nuestros viñedos hasta tu copa
          </h2>
          <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-primary/80 sm:text-lg">
            Conoce la historia detrás de cada botella, desde la tradición
            vinícola hasta la innovación en cada cosecha.
          </p>
          <a
            href="#conocenos"
            className="mt-8 inline-flex min-h-11 items-center gap-3 border-y border-primary px-1 py-3 text-sm leading-relaxed tracking-wide uppercase text-primary hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Descubre nuestra historia
            <FiArrowUpRight size={20} className="shrink-0" aria-hidden="true" focusable="false" />
          </a>
        </div>
        <figure className="mx-auto w-full max-w-150">
          <p className="mb-3 text-right text-2xl font-bold italic tracking-wide text-tertiary sm:text-3xl">
            1945
          </p>
          <Image
            src="/images/history/hero-history.jpg"
            alt="Imagen de nuestra historia"
            width={627}
            height={419}
            sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) min(600px, calc(100vw - 64px)), (max-width: 1279px) calc((100vw - 128px) / 2), 576px"
            className="h-auto w-full"
          />
          <figcaption className="mt-4 flex items-center gap-5">
            <Image
              src="/images/logo.svg"
              alt=""
              width={150}
              height={150}
              sizes="(max-width: 639px) 64px, 80px"
              className="h-auto w-16 shrink-0 sm:w-20"
            />
            <p className="ml-auto max-w-[30ch] text-right text-sm leading-relaxed italic text-primary/80">
              El arte de cultivar y celebrar cada cosecha
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
