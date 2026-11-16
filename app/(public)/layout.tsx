import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import UpToTop from "@/src/components/ui/UpToTop";

export default function PublicRootLayout({
  children,
}: React.PropsWithChildren) {
  return <>
    <a href="#contenido" className="skip-link">
      Saltar al contenido
    </a>
    <Header />
    <main id="contenido" tabIndex={-1} className="w-full min-h-dvh">
      {children}
    </main>
    <Footer />
    <UpToTop />
  </>;
}
