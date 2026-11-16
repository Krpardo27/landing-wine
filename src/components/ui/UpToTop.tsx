"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";
import { FiArrowUp } from "react-icons/fi";

const SCROLL_THRESHOLD = 480;

function getScrollSnapshot() {
  return window.scrollY > SCROLL_THRESHOLD;
}

function subscribeToScroll(onChange: () => void) {
  let wasVisible = getScrollSnapshot();

  function onScroll() {
    const visible = getScrollSnapshot();
    if (visible !== wasVisible) {
      wasVisible = visible;
      onChange();
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

export default function UpToTop() {
  const visible = useSyncExternalStore(subscribeToScroll, getScrollSnapshot, () => false);
  const reduceMotion = useReducedMotion();

  function scrollToTop() {
    // Move focus before the button disappears, without jumping ahead of the scroll.
    document.getElementById("contenido")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
  }

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.button
          key="up-to-top"
          type="button"
          aria-label="Volver arriba"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
          className="fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 flex size-12 items-center justify-center rounded-full border border-background/30 bg-primary text-background shadow-sm transition-colors hover:bg-tertiary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:right-8"
        >
          <FiArrowUp size={22} aria-hidden="true" focusable="false" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}