const chileanPesoFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * Formatea un importe expresado en pesos chilenos; no convierte monedas.
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  if (typeof amount !== "number" || !Number.isFinite(amount)) {
    throw new TypeError("El importe debe ser un número finito.");
  }

  return chileanPesoFormatter.format(amount);
}