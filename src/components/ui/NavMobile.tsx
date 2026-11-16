"use client";

import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { navLinks } from "@/src/data/navigation";

export default function NavMobile() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const destination = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  function close() {
    dialog.current?.close();
  }

  useEffect(() => {
    const media = matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (media.matches) dialog.current?.close();
    };
    media.addEventListener("change", onResize);
    return () => media.removeEventListener("change", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
        className="flex size-11 items-center justify-center text-primary lg:hidden"
      >
        <RxHamburgerMenu size={25} aria-hidden="true" focusable="false" />
      </button>
      <dialog
        ref={dialog}
        id="mobile-menu"
        aria-labelledby="menu-title"
        onClose={() => {
          setOpen(false);
          const target = destination.current;
          destination.current = null;
          if (target) {
            target.tabIndex = -1;
            target.focus({ preventScroll: true });
            target.scrollIntoView({ block: "start" });
          } else trigger.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          const outside = event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom;
          if (outside) close();
        }}
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[min(88vw,24rem)] max-w-none border-l border-primary/15 bg-background p-6 text-primary backdrop:bg-black/60"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <p id="menu-title" className="text-lg font-bold uppercase">
            Vin Rouge
          </p>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={close}
            className="flex size-11 items-center justify-center"
          >
            <RxCross2 size={25} aria-hidden="true" focusable="false" />
          </button>
        </div>
        <nav aria-label="Navegación móvil">
          <ul className="space-y-2">
            {navLinks.map((link) =>
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    destination.current = document.getElementById(link.href.slice(1));
                    close();
                  }}
                  className="flex min-h-14 items-center border-b border-primary/15 py-3 text-base uppercase tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            )}
          </ul>
        </nav>
        <p className="mt-10 text-sm leading-relaxed">
          Tradición vinícola. Descubre nuestra selección y la historia detrás de cada botella.
        </p>
      </dialog>
    </>
  );
}