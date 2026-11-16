import Image from "next/image";
import Navbar from "../ui/Navbar";
import NavMobile from "../ui/NavMobile";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/95">
      <div className="mx-auto flex min-h-22 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#home"
          aria-label="Vin Rouge, inicio"
          className="flex shrink-0 items-center gap-3 text-primary"
        >
          <Image
            src="/images/logo-brown.svg"
            alt=""
            width={48}
            height={56}
            className="h-14 w-12 object-contain"
          />
          <span className="text-lg font-bold uppercase tracking-wide sm:text-xl">
            Vin Rouge
          </span>
        </a>
        <Navbar />
        <a
          className="hidden min-h-11 items-center border-b border-primary text-sm text-primary lg:inline-flex"
          href="#shop"
        >
          Explorar selección
        </a>
        <NavMobile />
      </div>
    </header>
  );
}