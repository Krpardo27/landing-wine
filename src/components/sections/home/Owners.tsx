"use client";

import { type Variants, motion } from "framer-motion";
import Image from "next/image";
import Heading from "../../ui/typography/Heading";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const owners = [
  {
    src: "/images/owners/owner-1.png",
    name: "Juan Pérez",
    role: "Fundador",
    description: "Apasionado por el vino y la tradición.",
    social: [
      { icon: FaFacebook, link: "#" },
      { icon: FaTwitter, link: "#" },
      { icon: FaInstagram, link: "#" },
    ],
  },
  {
    src: "/images/owners/owner-2.png",
    name: "María López",
    role: "Co-Fundadora",
    description: "Innovadora en la producción de vinos.",
    social: [
      { icon: FaFacebook, link: "#" },
      { icon: FaTwitter, link: "#" },
      { icon: FaInstagram, link: "#" },
    ],
  },
  {
    src: "/images/owners/owner-3.png",
    name: "Carlos García",
    role: "Director Ejecutivo",
    description: "Liderando con visión y estrategia.",
    social: [
      { icon: FaFacebook, link: "#" },
      { icon: FaTwitter, link: "#" },
      { icon: FaInstagram, link: "#" },
    ],
  },
  {
    src: "/images/owners/owner-4.png",
    name: "Ana Martínez",
    role: "Enóloga Principal",
    description: "Creando sabores únicos e inolvidables.",
    social: [
      { icon: FaFacebook, link: "#" },
      { icon: FaTwitter, link: "#" },
      { icon: FaInstagram, link: "#" },
    ],
  },
];

export default function Owners() {
  return (
    <section className="py-20">
      {/* HEADER */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-16"
      >
        <Heading
          level={2}
          className="text-secondary uppercase tracking-widest mb-2"
        >
          Conoce a nuestros socios
        </Heading>

        <Heading
          level={1}
          className="text-primary uppercase text-3xl sm:text-4xl lg:text-5xl"
        >
          Nuestros Propietarios
        </Heading>

        <div className="w-16 h-[2px] bg-primary mt-4" />
      </motion.header>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {owners.map((owner, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={owner.src}
                alt={owner.name}
                fill
                // Add this line below
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-primary uppercase font-semibold tracking-wide">
                {owner.name}
              </h3>

              <p className="text-tertiary text-xs uppercase tracking-widest mt-1">
                {owner.role}
              </p>

              <div className="w-10 h-[1px] bg-secondary mx-auto my-3 opacity-40" />

              <p className="text-sm text-secondary leading-relaxed mb-4 italic">
                {owner.description}
              </p>

              {/* SOCIALS */}
              <div className="flex">
                {owner.social.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="
        w-10 h-10 flex items-center justify-center
        border 
        text-primary
        hover:text-white
        hover:bg-primary
        hover:-translate-y-1
        transition-all duration-300
      "
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
