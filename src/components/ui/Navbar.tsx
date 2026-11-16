import { navLinks } from "@/src/data/navigation";

export default function Navbar() {
  return (
    <nav aria-label="Navegación principal" className="hidden lg:block">
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-flex min-h-11 items-center text-xs uppercase tracking-wider text-primary hover:underline hover:underline-offset-8"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}