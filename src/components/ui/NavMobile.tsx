"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Events", href: "#events" },
  { label: "Blog", href: "#blog" },
];

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* BOTÓN */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden relative z-[1000] text-primary cursor-pointer"
      >
        <RxHamburgerMenu size={26} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP (FIX REAL) */}
            <motion.div
              className="
                fixed top-0 left-0 w-full h-screen
                bg-black/70
                backdrop-blur-lg
                z-[900]
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              className="
                fixed top-0 right-0 h-screen w-[85%] max-w-sm 
                bg-[#FFFBF4]
                z-[1000]
                flex flex-col
                px-6 pt-6 pb-10
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
                  style={{ height: 'auto' }} 
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
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="
                        text-primary uppercase tracking-[0.18em]
                        text-lg font-medium
                      "
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* FOOTER */}
              <div className="mt-auto pt-10">
                <p className="text-xs text-secondary tracking-widest uppercase">
                  © 2026 Winery
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}