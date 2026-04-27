import Heading from "../ui/typography/Heading";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F5EBDA] text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bottom-0 z-20">
             <Image
               src="/images/bg-footer.png"
               alt="Fondo decorativo de viñedo"
               fill
               priority
               className="object-contain object-bottom"
             />
           </div>
      <div className="px-6 container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo */}
          <div className="flex items-center w-fit gap-5">
            <Image
              src="/images/logo-brown.svg"
              alt="Logo"
              width={70}
              height={80}
              className="text-primary"
            />
            <Heading level={1} className="uppercase text-primary lg:text-2xl">
              Vin Rouge
            </Heading>
          </div>

          {/* Column 2: Contact Us */}
          <div className="flex flex-col w-max">
            <h4 className="text-lg font-semibold mb-4 border-primary border-b-2 text-primary uppercase">
              Contacto
            </h4>
            <div className="space-y-3 text-stone-400 text-sm">
              <p className="text-[#9E845C] flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#BB6500]" />
                123 Calle del Vino
              </p>
              <p className="text-[#9E845C] flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#BB6500]" />
                Valle de Guadalupe, BC
              </p>
              <p className="text-[#9E845C] flex items-center gap-2">
                <FaPhone className="text-[#BB6500]" />
                Tel: +52 123 456 7890
              </p>
              <p className="text-[#9E845C] flex items-center gap-2">
                <FaEnvelope className="text-[#BB6500]" />
                info@viñedos.com
              </p>
            </div>
          </div>

          {/* Column 3: About Us */}
          <div className="flex flex-col w-max">
            <h4 className="text-lg font-semibold mb-4 border-primary border-b-2 text-primary uppercase">
              Nosotros
            </h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[#9E845C] hover:text-primary transition-colors"
                >
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9E845C] hover:text-primary transition-colors"
                >
                  Viñedos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9E845C] hover:text-primary transition-colors"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9E845C] hover:text-primary transition-colors"
                >
                  Equipo
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Latest News */}
          <div className="flex flex-col w-max">
            <h4 className="text-lg font-semibold mb-4 border-primary border-b-2 text-primary uppercase">
              Novedades
            </h4>
            <p className="text-[#BB6500] text-sm mb-2">
              Mantente al día
            </p>
            <div className="space-y-3">
              <div>
                <span className="text-[#BB6500] text-xs">15 Abr 2026</span>
                <p className="text-[#9E845C] text-sm hover:text-primary transition-colors cursor-pointer">
                  Nueva cosecha disponible
                </p>
              </div>
              <div>
                <span className="text-[#BB6500] text-xs">02 Abr 2026</span>
                <p className="text-[#9E845C] text-sm hover:text-primary transition-colors cursor-pointer">
                  Evento de degustación
                </p>
              </div>
              <div>
                <span className="text-[#BB6500] text-xs">20 Mar 2026</span>
                <p className="text-[#9E845C] text-sm hover:text-primary transition-colors cursor-pointer">
                  Festival del Vino 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#9E845C] mt-12 pt-8 text-center text-[#9E845C] text-sm">
          <p>© 2026 Viñedos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
