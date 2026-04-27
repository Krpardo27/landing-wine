import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
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

export default function HomePage() {
  return (
    <>
      <Header />
      <div id="home" className="scroll-mt-28" />
      <Hero />
      <Step />
      <OurHistory />
      <div id="categories" className="scroll-mt-28" />
      <Categories />
      <div id="shop" className="scroll-mt-28" />
      <Products />
      {/* <div id="blog" className="scroll-mt-28" /> */}
      <div id="gallery" className="scroll-mt-28" />
      <Gallery />
      <Owners />
      <GetToKnowUs />
      <div id="events" className="scroll-mt-28" />
      <Events />
      <NewsLetter />
      <Clients />
      <Footer />
    </>
  );
}
