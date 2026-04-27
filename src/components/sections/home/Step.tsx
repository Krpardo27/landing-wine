"use client";

import { type Variants, motion } from "framer-motion";

const steps = [
  { number: "01", title: "Viñedo", description: "Visita y haz un recorrido" },
  { number: "02", title: "Cosecha", description: "Vive la temporada de recolección" },
  { number: "03", title: "Cata", description: "Disfruta nuestra mejor selección" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Step() {
  return (
    <section
      id="events"
      aria-label="Steps"
      className="container mx-auto lg:py-16 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.ol
        className="flex flex-col sm:flex-row items-stretch justify-between gap-6 sm:gap-0 w-full list-none"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, index) => (
          <motion.li
            key={step.number}
            variants={itemVariants}
            className={`
              flex flex-row sm:flex-1 items-center gap-4
              sm:px-6 lg:px-10 py-4

              ${index !== 0 ? "sm:border-l sm:border-[#d1b99150]" : ""}
            `}
          >
            <span className="text-tertiary text-5xl sm:text-6xl lg:text-7xl font-bold leading-none shrink-0">
              {step.number}.
            </span>

            <div className="flex flex-col gap-1">
              <h2 className="text-primary uppercase text-lg sm:text-xl font-semibold">
                {step.title}
              </h2>

              <span className="text-secondary text-base sm:text-lg">
                {step.description}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}