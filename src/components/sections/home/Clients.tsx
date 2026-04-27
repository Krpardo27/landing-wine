"use client";

import Image from "next/image";
import Heading from "../../ui/typography/Heading";

import { type Variants, motion } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const clients = [
  { src: "/images/clients/client-1.png", alt: "Cliente 1" },
  { src: "/images/clients/client-2.png", alt: "Cliente 2" },
  { src: "/images/clients/client-3.png", alt: "Cliente 3" },
  { src: "/images/clients/client-4.png", alt: "Cliente 4" },
  { src: "/images/clients/client-5.png", alt: "Cliente 5" },
  { src: "/images/clients/client-6.png", alt: "Cliente 6" },
  { src: "/images/clients/client-7.png", alt: "Cliente 7" },
  { src: "/images/clients/client-8.png", alt: "Cliente 8" },
];

export default function Clients() {
  return (
    <section className="py-16 bg-[#FFFBF4]">
      <motion.header className="flex items-center justify-center w-full mb-10 flex-col lg:flex-row">
        <motion.div
          className="flex flex-col text-center"
          variants={itemVariants}
        >
          <Heading level={2} className="text-secondary font-light uppercase mb-2">
            Conoce a nuestros socios
          </Heading>
          <Heading
            level={1}
            className="text-primary  uppercase my-2 sm:my-3 lg:my-4 text-3xl sm:text-4xl lg:text-5xl leading-14"
          >
            Nuestros Clientes
          </Heading>
        </motion.div>
      </motion.header>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 items-center border border-secondary">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 border border-secondary hover:bg-secondary/5 transition-all duration-300"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={150}
                height={80}
                className="object-contain max-h-40 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
