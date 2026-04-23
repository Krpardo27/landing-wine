import Image from "next/image";
import Heading from "../../ui/typography/Heading";

export default function Hero() {
  return (
    <section className="relative bg-[#F5EBDA] w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bottom-0 z-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Fondo decorativo de viñedo"
          fill
          priority
          className="object-contain object-bottom "
        />
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col justify-between gap-5 p-4 sm:p-6 lg:p-8">
          <span className="text-secondary text-sm sm:text-base lg:text-lg tracking-[0.18em] uppercase">
            TRADICIÓN VINÍCOLA
          </span>
          <Heading
            level={1}
            className="text-primary uppercase my-2 sm:my-3 lg:my-4 text-4xl sm:text-5xl lg:text-6xl leading-[0.95]"
          >
            Viñedos de todo <br />
            el mundo
          </Heading>
          <p className="text-primary text-base sm:text-lg lg:text-xl leading-relaxed max-w-[38ch] mb-4 sm:mb-5 lg:mb-6">
            Descubre vinos de origen selecto, con aromas profundos y sabores que
            celebran cada cosecha.
          </p>
          <button
            type="button"
            className="border border-t-primary border-l-0 border-r-0 cursor-pointer border-b-primary w-fit px-4 py-3 sm:px-5 sm:py-3.5 text-primary text-sm sm:text-base tracking-wide uppercase"
          >
            Descubre cómo se elabora
          </button>
        </div>
        <div className="relative w-fit mx-auto">
          <div className="bg-secondary rounded-full absolute inset-0 m-auto w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] z-0" />
          <Image
            src="/images/hero/hero-1.png"
            alt="Imagen principal de vino"
            width={500}
            height={500}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
