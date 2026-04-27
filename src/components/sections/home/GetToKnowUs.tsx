"use client";

import { type Variants, motion } from "framer-motion";
import Image from "next/image";
import Heading from "../../ui/typography/Heading";
import Accordion from "../../ui/Accordion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
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

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

export default function GetToKnowUs() {
  return (
    <section className="py-16 lg:py-24 w-full  bg-[#F5EBDA]">
      <motion.div
        className="px-4 sm:px-6 lg:px-8 flex flex-col min-h-[80vh] container mx-auto p-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Contenido: Accordion + Imagen */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center w-full">
          {/* Columna Accordion + Header */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <div className="mb-6">
              <Heading
                level={2}
                className="text-secondary uppercase tracking-widest mb-3 text-sm sm:text-base"
              >
                Conócenos
              </Heading>
              <Heading
                level={1}
                className="text-primary uppercase text-3xl sm:text-4xl lg:text-5xl"
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
            <Accordion />
          </motion.div>

          {/* Columna Imagen */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square overflow-hidden">
              <Image
                src="/images/knowUs.png"
                alt="Nuestros propietarios"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
