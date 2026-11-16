"use client";

import useEmblaCarousel from "embla-carousel-react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useCallback, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";

const controlClass = "inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary enabled:hover:bg-primary enabled:hover:text-white disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ProductCarousel({ children }: { children: ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  // Read both values from Embla: responsive reinitializations can change the snaps.
  const subscribe = useCallback((notify: () => void) => {
    if (!emblaApi) return () => {};
    emblaApi.on("select", notify).on("reInit", notify);
    return () => {
      emblaApi.off("select", notify).off("reInit", notify);
    };
  }, [emblaApi]);
  const getSnapshot = useCallback(
    () => emblaApi ? `${emblaApi.selectedScrollSnap()}:${emblaApi.scrollSnapList().length}` : "0:0",
    [emblaApi],
  );
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => "0:0");
  const [current, snapCount] = snapshot.split(":").map(Number);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!emblaApi || event.altKey || event.ctrlKey || event.metaKey) return;
    switch (event.key) {
      case "ArrowLeft": emblaApi.scrollPrev(reduceMotion()); break;
      case "ArrowRight": emblaApi.scrollNext(reduceMotion()); break;
      case "Home": emblaApi.scrollTo(0, reduceMotion()); break;
      case "End": emblaApi.scrollTo(snapCount - 1, reduceMotion()); break;
      default: return;
    }
    event.preventDefault();
  }

  return (
    <div role="region" aria-roledescription="carrusel" aria-labelledby="products-title" onKeyDown={handleKeyDown}>
      <p id="products-keyboard" className="mb-4 text-sm leading-relaxed text-primary">
        Desliza para explorar. Con el carrusel enfocado, usa las flechas izquierda y derecha; Inicio y Fin van a los extremos.
      </p>
      <div
        id="products-slides"
        ref={emblaRef}
        tabIndex={0}
        aria-label="Vinos de nuestra selección"
        aria-describedby="products-keyboard products-currency"
        className={`${emblaApi ? "touch-pan-y overflow-hidden" : "overflow-x-auto"} rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}
      >
        <div className="-ml-6 flex items-stretch">{children}</div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <button type="button" className={controlClass} disabled={snapCount < 2} onClick={() => emblaApi?.scrollPrev(reduceMotion())} aria-label="Vinos anteriores" aria-controls="products-slides">
          <FiArrowLeft size={20} aria-hidden="true" focusable="false" />
        </button>
        <div role="group" className="flex max-w-full flex-wrap justify-center" aria-label="Posiciones del carrusel">
          {Array.from({ length: snapCount }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index, reduceMotion())}
              aria-label={`Ir a la posición ${index + 1} de ${snapCount}`}
              aria-current={index === current ? "true" : undefined}
              aria-controls="products-slides"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span aria-hidden="true" className={`size-2.5 rounded-full ${index === current ? "bg-primary" : "border border-primary"}`} />
            </button>
          ))}
        </div>
        <button type="button" className={controlClass} disabled={snapCount < 2} onClick={() => emblaApi?.scrollNext(reduceMotion())} aria-label="Vinos siguientes" aria-controls="products-slides">
          <FiArrowRight size={20} aria-hidden="true" focusable="false" />
        </button>
      </div>
    </div>
  );
}