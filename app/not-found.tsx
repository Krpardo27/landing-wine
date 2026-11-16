import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="grid min-h-svh bg-[#351c24] text-[#f7f0e5] lg:grid-cols-2">
      <div className="flex flex-col px-6 sm:px-10 lg:px-12 xl:px-20">
        <header className="mx-auto flex w-full max-w-md items-center justify-between gap-4 border-b border-[#f7f0e5]/20 py-6 sm:py-8">
          <Link
            href="/"
            aria-label="Vin Rouge, inicio"
            className="inline-flex min-h-11 items-center gap-3 focus-visible:outline-[#f7f0e5]"
          >
            <Image
              src="/images/logo-brown.svg"
              alt=""
              width={40}
              height={48}
              className="h-12 w-10 object-contain brightness-0 invert"
            />
            <span className="text-base font-bold tracking-wide uppercase sm:text-lg">
              Vin Rouge
            </span>
          </Link>
          <span className="font-sans text-[10px] tracking-[0.16em] text-[#dbc5b7] uppercase sm:text-xs">
            Tradición vinícola
          </span>
        </header>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-14 sm:py-20 lg:py-16">
          <p className="mb-6 flex items-center gap-3 font-sans text-xs tracking-[0.2em] text-[#dbc5b7] uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Error 404 · Página no encontrada
          </p>
          <h1 className="max-w-[12ch] text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.15] tracking-tight text-balance">
            Nos salimos del viñedo.
          </h1>
          <p className="mt-6 max-w-[36ch] text-sm leading-7 text-[#e4d5c9] sm:text-base sm:leading-8">
            La página que buscas no existe o ha cambiado de lugar. Volvamos a un
            camino conocido: nuestros vinos y las historias que los acompañan.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:mt-10">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#f7f0e5] px-6 py-3 text-sm font-bold text-[#351c24] transition-colors hover:bg-[#e4d5c9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f0e5]"
            >
              <FiArrowLeft size={18} aria-hidden="true" focusable="false" />
              Volver al inicio
            </Link>
            <Link
              href="/#shop"
              className="inline-flex min-h-11 items-center gap-3 py-2 text-sm underline decoration-[#dbc5b7]/60 underline-offset-8 hover:decoration-current focus-visible:outline-[#f7f0e5]"
            >
              Explorar nuestros vinos
              <FiArrowUpRight size={18} aria-hidden="true" focusable="false" />
            </Link>
          </div>
        </div>

        <p className="mx-auto w-full max-w-md border-t border-[#f7f0e5]/20 py-6 font-sans text-xs leading-relaxed tracking-wide text-[#dbc5b7]">
          Vin Rouge · El origen es un buen lugar para volver.
        </p>
      </div>

      <figure className="relative m-0 min-h-72 bg-[#e4d5c9] sm:min-h-96 lg:min-h-svh">
        <Image
          src="/images/history/hero-history.jpg"
          alt="Una persona recorre un sendero entre las hileras de un viñedo."
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover object-[55%_center]"
        />
        <figcaption className="absolute right-5 bottom-5 left-5 border border-[#351c24]/10 bg-[#f7f0e5] px-5 py-4 text-primary sm:right-8 sm:bottom-8 sm:left-8 sm:px-6 sm:py-5">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            Entre viñedos
          </p>
          <p className="mt-2 text-xl italic sm:text-2xl">
            El camino de vuelta.
          </p>
        </figcaption>
      </figure>
    </main>
  );
}