"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate w-full scroll-mt-28 overflow-hidden bg-[#F5EBDA] py-16 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 aspect-1468/504">
        <Image
          src="/images/hero/hero-bg.png"
          alt=""
          fill
          loading="eager"
          quality={60}
          sizes="100vw"
          className="object-contain object-bottom"
        />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <motion.p
            initial={reduceMotion ? false : { y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: easing }}
            className="hero-eyebrow-entrance mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-tertiary sm:text-sm"
          >
            TRADICIÓN VINÍCOLA
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={reduceMotion ? false : { y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.08, ease: easing }}
            className="hero-title-entrance max-w-[15ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.08] font-semibold uppercase text-primary"
          >
            Viñedos de todo el mundo
          </motion.h1>
          <p className="mt-6 max-w-[38ch] text-base leading-relaxed text-primary sm:text-lg">
            Descubre vinos de origen selecto, con aromas profundos y sabores que
            celebran cada cosecha.
          </p>
          <a
            href="#conocenos"
            className="mt-8 inline-flex min-h-11 items-center gap-3 border-y border-primary px-1 py-3 text-sm leading-relaxed tracking-wide uppercase text-primary hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Descubre cómo se elabora
            <FiArrowUpRight size={20} className="shrink-0" aria-hidden="true" focusable="false" />
          </a>
        </div>
        <div className="relative mx-auto w-full max-w-80 lg:max-w-110">
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: easing }}
            className="hero-circle-entrance absolute inset-0 m-auto aspect-square w-4/5 rounded-full bg-secondary"
          />
          <motion.div
            initial={reduceMotion ? false : { y: 32, rotate: -3 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: easing }}
            className="hero-bottle-entrance relative"
          >
            <Image
              src="/images/hero/hero-1.png"
              alt="Imagen principal de vino"
              width={723}
              height={821}
              fetchPriority="high"
              loading="eager"
              quality={60}
              sizes="(max-width: 359px) calc(100vw - 40px), (max-width: 1023px) 320px, (max-width: 1279px) calc((100vw - 128px) / 2), 440px"
              className="relative h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
