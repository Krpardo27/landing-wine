import Categories from "@/src/components/sections/home/Categories";
import Clients from "@/src/components/sections/home/Clients";
import Events from "@/src/components/sections/home/Events";
import Gallery from "@/src/components/sections/home/Gallery";
import GetToKnowUs from "@/src/components/sections/home/GetToKnowUs";
import Hero from "@/src/components/sections/home/Hero";
import NewsLetter from "@/src/components/sections/home/NewsLetter";
import OurHistory from "@/src/components/sections/home/OurHistory";
import Owners from "@/src/components/sections/home/Owners";
import Products from "@/src/components/sections/home/Products";
import Step from "@/src/components/sections/home/Step";
import { site } from "@/src/data/site";

export default function HomePage() {
  return (
    <>
      {site.url && <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
            description: site.description,
            inLanguage: "es",
          }).replace(/</g, "\\u003c")
        }}
      />}
      <Hero />
      <Step />
      <OurHistory />
      <Categories />
      <Products />
      <Gallery />
      <Owners />
      <GetToKnowUs />
      <Events />
      <NewsLetter />
      <Clients />
    </>
  );
}
