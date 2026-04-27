"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "../../ui/typography/Heading";

export default function Hero() {
  return (
    <section className="relative bg-[#F5EBDA] w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bottom-0 z-0 size-full">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Fondo decorativo de viñedo"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
        {/* Text */}
        <motion.div
          className="flex flex-col justify-between gap-5 p-4 sm:p-6 lg:p-8 lg:mt-0 mt-28"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          <motion.span
            className="text-secondary text-sm sm:text-base lg:text-lg tracking-[0.18em] uppercase"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            TRADICIÓN VINÍCOLA
          </motion.span>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <Heading
              level={1}
              className="text-primary uppercase my-2 sm:my-3 lg:my-4 text-4xl sm:text-5xl lg:text-6xl leading-[0.95]"
            >
              Viñedos de todo <br />
              el mundo
            </Heading>
          </motion.div>
          <motion.p
            className="text-primary text-base sm:text-lg lg:text-xl leading-relaxed max-w-[38ch] mb-4 sm:mb-5 lg:mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            Descubre vinos de origen selecto, con aromas profundos y sabores que
            celebran cada cosecha.
          </motion.p>
          <motion.button
            type="button"
            className="border border-t-primary border-l-0 border-r-0 cursor-pointer border-b-primary w-fit px-4 py-3 sm:px-5 sm:py-3.5 text-primary text-sm sm:text-base tracking-wide uppercase"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{
              x: 6,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            Descubre cómo se elabora
          </motion.button>
        </motion.div>

        {/* Image */}
        <div className="relative w-fit mx-auto">
          {/* Circle pulse */}
          <motion.div
            className="bg-secondary rounded-full absolute inset-0 m-auto w-75 h-75 lg:w-87.5 lg:h-87.5 z-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          />
          {/* Subtle continuous pulse ring */}
          <motion.div
            className="rounded-full absolute inset-0 m-auto w-75 h-75 lg:w-87.5 lg:h-87.5 z-0 border border-secondary/40"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.12, 1], opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />
          {/* Bottle */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 60, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            whileHover={{
              y: -12,
              rotate: 2,
              transition: { type: "spring", stiffness: 200, damping: 18 },
            }}
          >
            <Image
              src="/images/hero/hero-1.png"
              alt="Imagen principal de vino"
              width={500}
              height={500}
              priority
              sizes="100vw"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
