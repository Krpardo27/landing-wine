"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <div role="alert" className="mx-auto max-w-xl px-6 py-24 text-primary">
    <h1 className="text-3xl leading-tight">No se pudo cargar esta página</h1>
    <p className="my-6 leading-relaxed">
      Inténtalo de nuevo. Si el problema continúa, vuelve al inicio más tarde.
    </p>
    <button
      type="button"
      onClick={reset}
      className="min-h-11 bg-primary px-6 py-3 text-white"
    >
      Volver a intentar
    </button>
  </div>;
}