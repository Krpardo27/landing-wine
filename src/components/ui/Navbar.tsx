const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Events", href: "#events" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <ul className="hidden lg:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-primary uppercase tracking-[0.12em] text-sm lg:text-base transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
