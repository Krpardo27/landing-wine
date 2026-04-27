import React from "react";
import Heading from "../../ui/typography/Heading";
import Image from "next/image";

export default function NewsLetter() {
  return (
    <section className="py-16 w-full">
      {/* HERO */}
      <div className="w-full relative flex justify-center">
        <Image
          src="/images/newsletter/hero-newsletter.png"
          alt="Newsletter"
          width={1600}
          height={400}
          className="w-full h-[300px] md:h-[600px] object-cover m-10"
        />
      </div>

      {/* WRAPPER */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div
          className="
      relative w-full max-w-6xl mx-auto
      bg-[#F5EBDA] 
      p-6 sm:p-8 lg:p-10
      shadow-lg text-center

      mt-[-120px] 
      md:mt-[-180px] 
      lg:mt-[-250px]
    "
        >
          <div className="flex items-start relative">

            {/* LOGO */}
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={140}
              height={140}
              className="absolute left-0 top-0"
            />

            {/* CONTENIDO */}
            <div className="flex flex-col text-center space-y-8 justify-between items-center w-full">

              <div className="flex flex-col justify-center items-center gap-5 px-4 max-w-[700px]">
                <Heading level={1} className="text-secondary uppercase font-light">
                  Novedades
                </Heading>

                <Heading level={2} className="text-primary">
                  Historias que nacen en la viña
                </Heading>

                <span className="text-tertiary">
                  Desde la cosecha hasta tu copa, comparte con nosotros las últimas noticias,
                  eventos y selecciones que reflejan nuestra pasión por el vino.
                </span>
              </div>

              <button
                type="button"
                className="bg-tertiary py-4 px-8 text-white"
              >
                Enviar
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
