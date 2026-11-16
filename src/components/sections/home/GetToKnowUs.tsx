import Image from "next/image";
import Accordion from "../../ui/Accordion";

export default function GetToKnowUs() {
  return (
    <section id="conocenos" aria-labelledby="know-us-title" className="w-full scroll-mt-28 bg-[#F5EBDA] py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <header className="mb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-tertiary sm:text-sm">
              Conócenos
            </p>
            <h2 id="know-us-title" className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] font-semibold uppercase text-primary">
              Nuestra Historia
            </h2>
          </header>
          <Accordion />
        </div>
        <Image
          src="/images/knowUs.png"
          alt="Nuestros propietarios"
          width={662}
          height={566}
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) min(600px, calc(100vw - 64px)), (max-width: 1279px) calc((100vw - 128px) / 2), 576px"
          className="mx-auto h-auto w-full max-w-150"
        />
      </div>
    </section>
  );
}
