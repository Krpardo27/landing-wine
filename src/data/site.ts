// Configure the verified public origin at build time; never invent a domain.
function getSiteUrl() {
  const value = process.env.SITE_URL;
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL debe ser un origen HTTPS sin ruta, credenciales ni parámetros.");
  }
  return url.origin;
}

export const site = {
  name: "Vin Rouge",
  title: "Vin Rouge | Vinos, tradición y experiencias de viñedo",
  description: "Descubre la selección de vinos de Vin Rouge, la historia detrás de cada botella y los momentos que celebran la tradición vinícola.",
  url: getSiteUrl(),
};