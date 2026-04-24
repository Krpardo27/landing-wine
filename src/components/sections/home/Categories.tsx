"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: 1,
    label: "Colección",
    name: "Botellas",
    src: "/images/categories/cat-1.png",
    alt: "Botella de vino Pinot Noir",
    w: 258,
    h: 272,
    // botella ancha — centrada verticalmente, desbordando por la derecha
    wrapperClass: "absolute top-1/2 -translate-y-1/2 -right-4 pointer-events-none",
  },
  {
    id: 2,
    label: "Experiencia",
    name: "Copa de Vino",
    src: "/images/categories/cat-2.png",
    alt: "Copa de vino tinto",
    w: 123,
    h: 208,
    // copa alta y estrecha — centrada verticalmente a la derecha
    wrapperClass: "absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none",
  },
  {
    id: 3,
    label: "Variedades",
    name: "Uvas",
    src: "/images/categories/cat-3.png",
    alt: "Racimo de uvas",
    w: 231,
    h: 175,
    // uvas anchas y bajas — centradas verticalmente con right
    wrapperClass: "absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none",
  },
  {
    id: 4,
    label: "Regalo",
    name: "Bolsa de Vino",
    src: "/images/categories/cat-4.png",
    alt: "Bolsa de regalo para vino",
    w: 127,
    h: 226,
    // bolsa alta y estrecha — igual que la copa
    wrapperClass: "absolute bottom-2 -right-4 pointer-events-none",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Categories() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-primary text-2xl font-semibold uppercase tracking-wide">
          Categorías
        </h2>
        <p className="text-secondary text-lg">
          Explora nuestra selección premium de vinos.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((cat) => (
          <motion.article
            key={cat.id}
            variants={cardVariants}
            whileHover="hover"
            className="relative bg-[#F5EBDA] rounded-2xl overflow-hidden min-h-65 p-6 flex items-center cursor-pointer"
          >
            {/* IMAGE */}
            <motion.div
              className={cat.wrapperClass}
              variants={{
                hover: {
                  x: -12,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                },
              }}
            >
              <Image
                src={cat.src}
                alt={cat.alt}
                width={cat.w}
                height={cat.h}
                className="drop-shadow-2xl"
              />
            </motion.div>

            {/* TEXT */}
            <div className="relative z-10">
              <span className="text-secondary text-xs uppercase tracking-[0.2em]">
                {cat.label}
              </span>
              <h3 className="text-primary text-xl font-semibold mt-1">
                {cat.name}
              </h3>
            </div>


          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}