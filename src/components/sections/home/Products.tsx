import Image from "next/image";
import { products } from "@/src/data/products";
import { formatCurrency } from "@/src/utils/formatCurrency";
import ProductCarousel from "./ProductCarousel";

export default function Products() {
  return (
    <section id="shop" aria-labelledby="products-title" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="min-w-0 max-w-xl">
            <p className="mb-3 text-sm uppercase tracking-widest text-[#8A5200]">Nuestra Selección</p>
            <h2 id="products-title" className="text-3xl leading-tight text-primary uppercase sm:text-4xl lg:text-5xl">
              Nuestra selección de vinos
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary">
              Descubre nuestra exclusiva selección de vinos, cuidadosamente elegidos para los paladares más exigentes.
            </p>
          </div>
          <Image src="/images/logo.svg" alt="" width={180} height={180} className="h-auto w-28 shrink-0 sm:w-44" sizes="(max-width: 640px) 112px, 176px" />
        </header>

        <p id="products-currency" className="mb-6 text-sm leading-relaxed text-primary">
          Precios en pesos chilenos (CLP).
        </p>
        <ProductCarousel>
          {products.map((product, index) => (
            <div
              key={product.id}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${products.length}: ${product.name}`}
              className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%]"
            >
              <article className="flex h-full min-w-0 flex-col rounded-xl bg-[#F5EBDA] p-5 sm:p-6">
                <div className="relative mb-5 aspect-square w-full">
                  <Image
                    src={product.image}
                    alt={`Botella de ${product.name}`}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 80px), (max-width: 1024px) calc((100vw - 88px) / 2 - 48px), (max-width: 1280px) calc((100vw - 112px) / 3 - 48px), 341px"
                    className="object-contain"
                  />
                </div>
                <h3 className="wrap-break-word text-base font-semibold tracking-wide text-primary uppercase">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary">{product.description}</p>
                <p className="mt-auto pt-5 text-base font-bold text-primary" aria-describedby="products-currency">
                  {formatCurrency(product.price)}
                </p>
              </article>
            </div>
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}
