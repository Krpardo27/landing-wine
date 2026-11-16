const steps = [
  { number: "01", title: "Viñedo", description: "Visita y haz un recorrido" },
  { number: "02", title: "Cosecha", description: "Vive la temporada de recolección" },
  { number: "03", title: "Cata", description: "Disfruta nuestra mejor selección" },
];

export default function Step() {
  return (
    <section
      aria-label="Viñedo, cosecha y cata"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24"
    >
      <ol className="grid list-none grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
        {steps.map((step) => (
          <li
            key={step.number}
            className="flex min-w-0 items-start gap-4 border-t border-secondary pt-6"
          >
            <span aria-hidden="true" className="shrink-0 text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-tertiary">
              {step.number}.
            </span>

            <div className="flex flex-col gap-1">
              <h2 className="text-xl leading-snug font-semibold uppercase text-primary sm:text-2xl">
                {step.title}
              </h2>

              <p className="text-sm leading-relaxed text-primary/80 sm:text-base">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}