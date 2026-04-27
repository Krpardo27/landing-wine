"use client";

import { type Variants, motion } from "framer-motion";
import Image from "next/image";
import Heading from "../../ui/typography/Heading";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

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
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const events = [
  {
    id: 1,
    title: "Tour Viñedo Premium",
    date: "12 Junio 2026",
    time: "10:00 - 13:00",
    location: "Valle del Maipo",
    image: "/images/events/event-1.png",
    bgImage: "/images/events/hero-event-1.png",
  },
  {
    id: 2,
    title: "Cata de Vinos Exclusivos",
    date: "18 Junio 2026",
    time: "19:00 - 22:00",
    location: "Santiago Centro",
    image: "/images/events/event-2.png",
    bgImage: "/images/events/hero-event-2.png",
  },
  {
    id: 3,
    title: "Experiencia Vendimia",
    date: "25 Junio 2026",
    time: "09:00 - 14:00",
    location: "Valle de Colchagua",
    image: "/images/events/event-3.png",
    bgImage: "/images/events/hero-event-3.png",
  },
];

export default function Events() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5EBDA]/30">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <Heading
            level={2}
            className="text-secondary uppercase tracking-widest mb-3 text-sm sm:text-base"
          >
            Exclusivos
          </Heading>
          <Heading
            level={1}
            className="text-primary uppercase text-3xl sm:text-4xl lg:text-5xl"
          >
            Conoce nuestros eventos
          </Heading>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Grid cols-2 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT - Lista de eventos */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                variants={cardVariants}
                whileHover="hover"
                className="flex h-[140px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative w-[160px] flex-shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>

                <div className="relative flex-1 bg-tertiary/10">
                  <Image
                    src={event.bgImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 p-4 flex flex-col justify-center">
                    <h3 className="text-primary font-semibold uppercase text-sm tracking-wide mb-2">
                      {event.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 text-xs text-primary">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-secondary text-[10px]" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-secondary text-[10px]" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-secondary text-[10px]" />
                        {event.location}
                      </span>
                      <button className="cursor-pointer absolute bottom-3 left-3 bg-primary py-1 px-2 text-xs uppercase tracking-wide opacity-90 hover:opacity-100 transition-opacity">
                        <span className="text-tertiary py-3 px-2 text-xs uppercase tracking-wide  rounded-md">
                          Ver detalles
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT - Hero imagen */}
          <motion.div
            variants={imageVariants}
            className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/events/hero-events.png"
              alt="Eventos"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* texto */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-2xl lg:text-3xl font-bold uppercase"
              >
                Vive la experiencia
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-sm opacity-90 mt-2"
              >
                Eventos únicos en los mejores viñedos de Chile
              </motion.p>
            </div>

            {/* Elemento decorativo */}
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 border-4 border-white/30 rounded-xl"
              initial={{ scale: 0, rotate: 15 }}
              whileInView={{ scale: 1, rotate: 15 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
