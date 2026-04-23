"use client";

import { products } from "@/src/data/products";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Products() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="bg-[#FFFBF4] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Carrusel */}
        <div className="overflow-hidden pt-16 pb-14" ref={emblaRef}>
          <div className="flex gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
              >
                {/* Card con imagen sobresaliendo por la izquierda */}
                <div className="relative overflow-visible flex flex-col items-start gap-3 py-8 pr-6 pl-28 sm:pl-32 bg-[#F5EBDA] rounded-2xl mt-20 w-[320px] sm:w-[360px] min-h-[320px] sm:min-h-[200px]">
                  <div className="absolute -left-20 sm:-left-20 top-1/2 -translate-y-1/2 w-[260px] h-[300px] sm:w-[300px] sm:h-[340px] z-50 pointer-events-none">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                  <h3 className="text-primary text-base font-semibold uppercase tracking-wide text-left">
                    {product.name}
                  </h3>
                  <p className="text-tertiary text-sm italic text-left leading-relaxed">
                    {product.description}
                  </p>
                  <span className="text-secondary font-bold text-base">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles: flechas + dots */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <FaChevronRight className="rotate-180" />
          </button>

          <div className="flex gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Ir al slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            aria-label="Siguiente"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

