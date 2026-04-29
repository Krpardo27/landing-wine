"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Socials from "./Socials";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Events", href: "#events" },
  { label: "Blog", href: "#blog" },
];

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* BOTÓN */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden relative z-50 text-primary cursor-pointer overflow-hidden"
      >
        <RxHamburgerMenu size={26} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP (FIX REAL) */}
            <motion.div
              className="
                fixed top-0 left-0 w-full h-dvh
                bg-black/70
                backdrop-blur-lg
                z-900 overflow-x-hidden
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              className="
                fixed top-0 right-0 h-dvh w-[85%] max-w-sm 
                bg-[#FFFBF4]
                z-1000
                max-h-dvh 
                overflow-y-auto
                flex flex-col
                px-6 pt-2 pb-5
                shadow-2xl backdrop-blur-2xl
              "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-12">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  style={{ height: "auto" }}
                />

                <button
                  onClick={() => setOpen(false)}
                  className="text-primary cursor-pointer"
                >
                  <RxCross2 size={26} />
                </button>
              </div>

              {/* LINKS */}
              <motion.ul
                className="flex flex-col gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      whileHover={{ x: 6 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="
    relative inline-block
    text-primary uppercase tracking-[0.18em]
    text-lg font-medium
    transition-colors duration-300
    hover:text-tertiary

    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-[1px]
    after:bg-tertiary
    after:transition-all
    after:duration-300

    hover:after:w-full
  "
                    >
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* FOOTER */}
              <div className="flex-1 flex flex-col justify-end gap-4">
                <Socials />
                <div className="border-t border-secondary/30 pt-4">
                  <p className="text-base text-center text-secondary tracking-widest uppercase">
                    © 2026 Winery
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
