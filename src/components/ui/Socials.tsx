"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

type Social = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const socials: Social[] = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/56900000000",
    icon: <FaWhatsapp />,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebookF />,
  },
];

export default function Socials() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
            group
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-secondary/20
            text-primary
            transition-all duration-300
            hover:bg-primary
            hover:text-white
            shadow-sm hover:shadow-md
          "
        >
          <span className="text-lg">{social.icon}</span>

          {/* glow sutil */}
          <span
            className="
              absolute inset-0 rounded-full
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              blur-md
              bg-primary/20
              -z-10
            "
          />
        </motion.a>
      ))}
    </div>
  );
}