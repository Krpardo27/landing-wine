import Image from "next/image";
import Navbar from "../ui/Navbar";
import Heading from "../ui/typography/Heading";
import NavMobile from "../ui/NavMobile";

export default function Header() {
  return (
    <header className="fixed top-0 z-20 w-full py-4 backdrop-blur-sm p-4">
      <div className="flex justify-between container w-full items-center mx-auto h-20">
        <div className="flex items-center w-fit gap-5">
          <Image src="/images/logo-brown.svg" alt="Logo" width={70} height={80} className="text-primary"/>
          <Heading level={1} className="uppercase text-primary lg:text-5xl">Vin Rouge</Heading>
        </div>
        <Navbar />
        <NavMobile />
      </div>
    </header>
  );
}
