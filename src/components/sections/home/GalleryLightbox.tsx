"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryImages } from "./gallery-data";

export default function GalleryLightbox({ index, close }: { index: number; close: () => void }) {
  return (
    <Lightbox
      open
      index={index}
      close={close}
      slides={galleryImages}
      labels={{
        Close: "Cerrar visor",
        Previous: "Imagen anterior",
        Next: "Imagen siguiente",
        Lightbox: "Visor de imágenes de la viña",
        "Photo gallery": "Galería de imágenes",
        Carousel: "Carrusel",
        Slide: "Imagen",
        "{index} of {total}": "{index} de {total}",
      }}
      render={{
        iconLoading: () => <span role="status">Cargando imagen…</span>,
        iconError: () => <span role="status">No se pudo cargar la imagen</span>,
      }}
      styles={{ button: { minWidth: 44, minHeight: 44 } }}
    />
  );
}