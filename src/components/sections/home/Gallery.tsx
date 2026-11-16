import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { GalleryOpenButton, GalleryViewer } from "./GalleryViewer";
import { galleryImages } from "./gallery-data";

const icons = [
  { id: 1, src: "/images/gallery/icons-1.svg", name: "Copa de Vino", description: "Disfruta cada sorbo en la copa perfecta, elegida para realzar los aromas." },
  { id: 2, src: "/images/gallery/icons-2.svg", name: "Aroma Fino", description: "Descubre los matices únicos que hacen especial a cada variedad." },
  { id: 3, src: "/images/gallery/icons-3.svg", name: "Selección Única", description: "Cada botella es elegida con cuidado entre las mejores cosechas." },
  { id: 4, src: "/images/gallery/icons-4.svg", name: "Tradición", description: "Años de experiencia y pasión que se reflejan en cada vino." },
];

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto mb-10 max-w-xl text-center">
          <p className="mb-3 text-sm tracking-widest text-[#8A5200] uppercase">Aroma Natural</p>
          <h2 id="gallery-title" className="text-3xl leading-tight text-primary uppercase sm:text-4xl lg:text-5xl">A cada instante</h2>
          <p className="mt-5 text-base leading-relaxed text-primary">
            Explora los momentos que capturan la esencia pura de nuestra viña y el aroma único de cada cosecha.
          </p>
        </header>
        <GalleryViewer>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <GalleryOpenButton key={image.src} index={index} label={`Ver imagen ${index + 1} de ${galleryImages.length}: ${image.alt}`} className="group relative block aspect-4/3 w-full min-w-0 overflow-hidden rounded-md bg-[#F5EBDA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc((100vw - 88px) / 2), (max-width: 1280px) calc((100vw - 112px) / 3), 389px" className="object-cover" />
              </GalleryOpenButton>
            ))}
          </div>
        </GalleryViewer>
        <div className="mt-12 grid min-w-0 items-start gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <h3 className="mb-5 text-2xl text-primary uppercase">Nuestra Historia</h3>
            <p className="mb-6 text-base leading-relaxed text-primary">
              Cada botella es elegida con cuidado entre las mejores cosechas. Años de experiencia y pasión que se reflejan en cada vino.
            </p>
            <a
              href="#conocenos"
              className="inline-flex min-h-11 items-center gap-3 border-b border-primary px-1 text-sm font-semibold tracking-widest text-primary uppercase hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Conoce nuestra historia
              <FiArrowUpRight size={18} className="shrink-0" aria-hidden="true" focusable="false" />
            </a>
            <div className="relative mt-8 aspect-6/5 w-full bg-[#F5EBDA]">
              <Image src="/images/gallery/gallery-hero.png" alt="" fill sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc(100vw - 64px), (max-width: 1280px) calc((100vw - 104px) / 2), 588px" className="object-contain p-5" />
            </div>
          </div>
          <div className="grid min-w-0 gap-8 sm:grid-cols-2">
            {icons.map((icon) => (
              <div key={icon.id} className="flex min-w-0 items-start gap-3">
                <Image src={icon.src} alt="" width={40} height={40} className="h-auto shrink-0" />
                <div className="min-w-0">
                  <h3 className="mb-2 text-sm font-semibold tracking-wide text-primary uppercase">{icon.name}</h3>
                  <p className="text-sm leading-relaxed text-primary">{icon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
