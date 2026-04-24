import Image from "next/image";
import Heading from "../../ui/typography/Heading";

export default function OurHistory() {
  return (
    <section className="relative lg:py-16 py-8 w-full flex items-center justify-center overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 p-4 sm:p-6 lg:p-8">
          <span className="text-secondary text-sm sm:text-base lg:text-lg tracking-[0.18em] uppercase">
            NUESTRA HISTORIA
          </span>
          <Heading
            level={1}
            className="text-primary uppercase my-2 sm:my-3 lg:my-4 text-4xl sm:text-5xl lg:text-6xl leading-[0.95]"
          >
            Desde nuestros viñedos <br />
            hasta tu copa
          </Heading>
          <p className="text-primary text-base sm:text-lg lg:text-xl leading-relaxed max-w-[38ch] mb-4 sm:mb-5 lg:mb-6">
            Conoce la historia detrás de cada botella, desde la tradición
            vinícola hasta la innovación en cada cosecha.
          </p>
          <button
            type="button"
            className="border border-t-primary border-l-0 border-r-0 cursor-pointer border-b-primary w-fit px-4 py-3 sm:px-5 sm:py-3.5 text-primary text-sm sm:text-base tracking-wide uppercase"
          >
            Descubre nuestra historia
          </button>
        </div>
        <div className="relative w-fit mx-auto p-4">
          <Image
            src="/images/history/hero-history.jpg"
            alt="Imagen de nuestra historia"
            width={600}
            height={600}
            className="relative z-10 w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[600px] h-auto"
          />
          <span className="absolute text-xl sm:text-3xl lg:text-4xl top-0 right-4 text-secondary tracking-[0.18em] font-bold italic z-20">
            1945
          </span>
          <p className="text-secondary italic text-right py-2">
            El arte de cultivar y celebrar cada cosecha
          </p>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={150}
            height={150}
            className="absolute -bottom-10 left-0 sm:-bottom-16 sm:-left-10 lg:-bottom-14 lg:-left-12 z-20 w-[80px] sm:w-[110px] lg:w-[150px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
