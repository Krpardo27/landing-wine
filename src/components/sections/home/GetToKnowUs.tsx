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
    <section className="py-16 w-full">
      <motion.div
        className="
      bg-[#F5EBDA] 
      px-6 py-10 lg:px-10 lg:py-14  m-10
    "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 lg:p-12 gap-8 lg:gap-10 items-center w-full">
          {/* Columna izquierda */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start"
          >
            <div className="mb-6">
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

            <Accordion />
          </motion.div>

          {/* Imagen */}
          <motion.div variants={imageVariants} className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-lg">
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
