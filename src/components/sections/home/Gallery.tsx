"use client";

import { type Variants, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Heading from "../../ui/typography/Heading";
import Image from "next/image";

const icons = [
  {
    id: 1,
    src: "/images/gallery/icons-1.svg",
    name: "Copa de Vino",
    description:
      "Disfruta cada sorbo en la copa perfecta, elegida para realzar los aromas.",
  },
  {
    id: 2,
    src: "/images/gallery/icons-2.svg",
    name: "Aroma Fino",
    description:
      "Descubre los matices únicos que hacen especial a cada variedad.",
  },
  {
    id: 3,
    src: "/images/gallery/icons-3.svg",
    name: "Selección Única",
    description:
      "Cada botella es elegida con cuidado entre las mejores cosechas.",
  },
  {
    id: 4,
    src: "/images/gallery/icons-4.svg",
    name: "Tradición",
    description: "Años de experiencia y pasión que se reflejan en cada vino.",
  },
];

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/gallery-1.png",
    alt: "Galería 1",
  },
  {
    id: 2,
    src: "/images/gallery/gallery-2.png",
    alt: "Galería 2",
  },
  {
    id: 3,
    src: "/images/gallery/gallery-3.png",
    alt: "Galería 3",
  },
  {
    id: 4,
    src: "/images/gallery/gallery-4.png",
    alt: "Galería 4",
  },
  {
    id: 5,
    src: "/images/gallery/gallery-5.png",
    alt: "Galería 5",
  },
  {
    id: 6,
    src: "/images/gallery/gallery-6.png",
    alt: "Galería 6",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconImgVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -8, 8, -4, 0],
    scale: 1.15,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const lightboxSlides = galleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <section className="lg:py-16 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div
        className="absolute hidden md:block lg:-left-30 lg:top-[160px]"
      >
        <div
          className="bg-[#F5EBDA] shadow-xl relative overflow-hidden"
          style={{
            width: "620px",
            height: "550px",
            clipPath: "polygon(10% 0%, 100% 15%, 90% 100%, 0% 100%)",
          }}
        >
          {/* CONTENEDOR DE CONTROL */}
          <div className="absolute inset-0 flex p-10 lg:left-18 bottom-0">
            <div className="relative size-130">
              <Image
                src="/images/gallery/gallery-hero.png"
                alt="Decoración galería"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col justify-center items-center text-center"
          variants={headerVariants}
        >
          <Heading
            level={3}
            className="text-tertiary uppercase mb-4 leading-tight"
          >
            Aroma Natural
          </Heading>
          <Heading
            level={1}
            className="text-primary uppercase tracking-widest font-semibold mb-3"
          >
            a Cada Instante
          </Heading>

          <p className="text-primary/60 text-lg max-w-xl">
            Explora los momentos que capturan la esencia pura de nuestra viña y
            el aroma único de cada cosecha.
          </p>
        </motion.div>

        {/* Grid 3x2 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 z-20 relative"
          variants={containerVariants}
        >
          {galleryImages.map((image) => (
            <motion.article
              key={image.id}
              className="cursor-pointer group"
              variants={imageVariants}
              onClick={() => setLightboxIndex(image.id - 1)}
            >
              <motion.div
                className="
      relative w-full h-72 overflow-hidden rounded-md bg-[#F5EBDA]"
                whileHover={{ y: -4 }}
              >
                {/* IMAGE */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="
        w-full h-full object-cover
        transition-all duration-500
        group-hover:brightness-75 group-hover:contrast-110
      "
                />

                {/* OVERLAY SUAVE */}
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.25 }}
                  transition={{ duration: 0.3 }}
                />

                {/* BORDE HOVER */}
                <div
                  className="
        absolute inset-0 rounded-md
        border border-transparent
        group-hover:border-white/40
        transition-all duration-300
      "
                />

                {/* CTA */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 8 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-white text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-lg border border-white">
                    Ver
                  </span>
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      {/* Nuestra Historia + Íconos */}
      <motion.div
        className="mt-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Nuestra Historia — primero en mobile */}
        <motion.div
          className="flex-1 flex flex-col justify-center order-1 lg:order-2"
          variants={headerVariants}
        >
          <Heading level={2} className="text-primary uppercase mb-6">
            Nuestra Historia
          </Heading>
          <p className="text-primary/70 text-base leading-relaxed mb-8">
            Mattis aliquam malesuada euismod augue posuere venenatis. Maecenas
            faucibus dui vitae tellus et mi. Ut augue mattis augue dui et amet.
            Fringilla vestibulum dui.
          </p>
          <Link
            href="#"
            className="self-start uppercase tracking-widest text-sm font-semibold text-primary border-b border-primary pb-1 hover:text-tertiary hover:border-tertiary transition-colors"
          >
            Ver más
          </Link>
        </motion.div>

        {/* Íconos — segundo en mobile, primero en desktop */}
        <motion.div
          className="flex-1 grid lg:grid-cols-2 grid-cols-1 gap-8 order-2 lg:order-1"
          variants={containerVariants}
        >
          {icons.map((icon) => (
            <motion.div
              key={icon.id}
              className="flex items-start gap-3"
              variants={iconVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div variants={iconImgVariants} className="shrink-0 size-12 relative">
                <Image src={icon.src} alt={icon.name} fill />
              </motion.div>
              <div className="flex flex-col justify-center">
                <h3 className="text-primary font-semibold uppercase text-sm tracking-wide mb-1">
                  {icon.name}
                </h3>
                <p className="text-primary/60 text-sm leading-relaxed">
                  {icon.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        slides={lightboxSlides}
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
      />
    </section>
  );
}
