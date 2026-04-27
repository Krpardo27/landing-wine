"use client";

import { type Variants, motion } from "framer-motion";
import Image from "next/image";
import Heading from "../../ui/typography/Heading";
import Accordion from "../../ui/Accordion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 80, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
};

export default function GetToKnowUs() {
  return (
    <section className="py-16 w-full overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto bg-[#F5EBDA] 
          px-6 py-10 lg:px-10 lg:py-14 
          /* CAMBIO AQUÍ: Margen responsivo. En mobile poco, en lg el original */
          my-10 mx-4 sm:mx-6 lg:mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 lg:p-12 gap-8 lg:gap-10 items-center w-full">
          {/* Columna izquierda */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start min-w-0" // min-w-0 ayuda a que los hijos (accordion) no expandan el flex
          >
            <div className="mb-6 w-full">
              <Heading
                level={2}
                className="text-secondary uppercase tracking-widest mb-3 text-sm"
              >
                Conócenos
              </Heading>
              <Heading
                level={1}
                className="text-primary uppercase text-2xl sm:text-3xl lg:text-4xl"
              >
                Nuestra Historia
              </Heading>
              <motion.div
                className="w-20 h-1 bg-primary mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </div>

            {/* El Accordion ahora sí respetará el ancho del padre */}
            <Accordion />
          </motion.div>

          {/* Columna Imagen */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center w-full"
          >
            {/* CAMBIO AQUÍ: w-full y max-w-[500px] para que en mobile se encoja */}
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/knowUs.png"
                alt="Nuestros propietarios"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
