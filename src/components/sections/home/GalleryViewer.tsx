"use client";

import dynamic from "next/dynamic";
import { createContext, useContext, useState, type ReactNode } from "react";

const GalleryLightbox = dynamic(() => import("./GalleryLightbox"), {
  ssr: false,
  loading: () => <p role="status" className="mt-4 text-sm text-primary">Cargando visor de imágenes…</p>,
});

const GalleryContext = createContext<((index: number) => void) | null>(null);

export function GalleryViewer({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <GalleryContext.Provider value={setIndex}>
      {children}
      {index !== null && <GalleryLightbox index={index} close={() => setIndex(null)} />}
    </GalleryContext.Provider>
  );
}

export function GalleryOpenButton({ index, label, className, children }: {
  index: number;
  label: string;
  className: string;
  children: ReactNode;
}) {
  const open = useContext(GalleryContext);
  return (
    <button type="button" onClick={() => open?.(index)} aria-label={label} aria-haspopup="dialog" className={className}>
      {children}
    </button>
  );
}