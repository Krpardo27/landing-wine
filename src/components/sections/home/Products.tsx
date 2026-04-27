"use client";

import { type Variants, motion } from "framer-motion";
import { products } from "@/src/data/products";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Heading from "../../ui/typography/Heading";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: 30, rotate: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
  },
};

const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: { scale: 0.95 },
};

const dotVariants: Variants = {
  inactive: { scale: 1, opacity: 0.3 },
  active: {
    scale: 1.3,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function Products() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="lg:py-16 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.header className="flex items-center w-full mb-10 flex-col lg:flex-row">
          <motion.div
            className="flex flex-col text-center"
            variants={itemVariants}
          >
            <Heading level={1} className="text-secondary">
              Nuestra Selección
            </Heading>
            <Heading
              level={2}
              className="text-primary uppercase my-2 sm:my-3 lg:my-4 text-3xl sm:text-4xl lg:text-5xl leading-14"
            >
              Nuestra selección <br />
              de vinos
            </Heading>
            <p className="text-secondary text-lg max-w-[40ch]">
              Descubre nuestra exclusiva selección de vinos, cuidadosamente
              elegidos para los paladares más exigentes.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center items-center relative lg:ml-52 cursor-pointer"
            variants={logoVariants}
            whileHover={{
              scale: 1.08,
              rotate: 5,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <Image src="/images/logo.svg" alt="logo" width={250} height={250} />
          </motion.div>
        </motion.header>

        {/* Carrusel */}
        <div className="overflow-hidden pb-14" ref={emblaRef}>
          <div className="flex gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
              >
                {/* Card con imagen sobresaliendo por la izquierda */}
                <motion.div
                  whileHover="hover"
                  className="relative overflow-visible flex flex-col items-start gap-3 py-8 pr-6 pl-28 sm:pl-32 bg-[#F5EBDA] rounded-2xl mt-20 w-[320px] sm:w-[360px] min-h-[320px] sm:min-h-[200px]"
                >
                  <motion.div
                    className="absolute -left-20 sm:-left-20 top-1/2 -translate-y-1/2 w-[260px] h-[300px] sm:w-[300px] sm:h-[340px] z-50 pointer-events-none"
                    variants={{
                      hover: {
                        y: -10,
                        rotate: -3,
                        transition: {
                          type: "spring",
                          stiffness: 280,
                          damping: 18,
                        },
                      },
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </motion.div>
                  <h3 className="text-primary text-base font-semibold uppercase tracking-wide text-left">
                    {product.name}
                  </h3>
                  <p className="text-tertiary text-sm italic text-left leading-relaxed">
                    {product.description}
                  </p>
                  <span className="text-secondary font-bold text-base">
                    ${product.price.toFixed(2)}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles: flechas + dots */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            onClick={scrollPrev}
            aria-label="Anterior"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <FaChevronRight className="rotate-180" />
          </motion.button>

          <motion.div className="flex gap-2">
            {products.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Ir al slide ${index + 1}`}
                className="w-2.5 h-2.5 rounded-full bg-primary transition-colors"
                variants={dotVariants}
                animate={index === selectedIndex ? "active" : "inactive"}
              />
            ))}
          </motion.div>

          <motion.button
            onClick={scrollNext}
            aria-label="Siguiente"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <FaChevronRight />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
