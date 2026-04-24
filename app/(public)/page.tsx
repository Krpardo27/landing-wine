import Header from "@/src/components/layout/Header";
import Categories from "@/src/components/sections/home/Categories";
import Hero from "@/src/components/sections/home/Hero";
import OurHistory from "@/src/components/sections/home/OurHistory";
import Products from "@/src/components/sections/home/Products";
import Step from "@/src/components/sections/home/Step";

export default function HomePage() {
  return (
    <>
      <Header />
      <div id="home" className="scroll-mt-28" />
      <Hero />
      <Step />
      <div id="events" className="scroll-mt-28" />
      <OurHistory />
      <div id="categories" className="scroll-mt-28" />
      <Categories />
      <div id="shop" className="scroll-mt-28" />
      <Products />
      <div id="blog" className="scroll-mt-28" />
    </>
  );
}
