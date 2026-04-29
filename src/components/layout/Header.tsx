"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Navbar from "../ui/Navbar";
import NavMobile from "../ui/NavMobile";
import Heading from "../ui/typography/Heading";
import Socials from "../ui/Socials";

export default function Header() {
  const { scrollY } = useScroll();
  const [hasShadow, setHasShadow] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasShadow(latest > 50);
  });

  return (
    <motion.header
      initial={false}
      animate={{
        boxShadow: hasShadow
          ? "0 4px 10px rgba(0,0,0,0.2)"
          : "0 0px 0px rgba(0,0,0,0)",
        backgroundColor: hasShadow
          ? "rgba(255,255,255,0.8)"
          : "rgba(255,255,255,0)",
        backdropFilter: "blur(10px)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full px-4 py-2 sm:py-4"
    >
      <div className="flex justify-between container w-full items-center mx-auto">
        <div className="flex items-center w-fit gap-5">
          <Image
            src="/images/logo-brown.svg"
            alt="Logo"
            width={70}
            height={80}
            style={{ height: 'auto' }}
            className="text-primary"
          />
          <Heading level={1} className="uppercase text-primary lg:text-2xl text-xl">Vin Rouge</Heading>
        </div>

        <Navbar />
        <div className="hidden lg:flex">
          <Socials />
        </div>
        <NavMobile />
      </div>
    </motion.header>
  );
}