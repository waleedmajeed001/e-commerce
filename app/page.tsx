import Header from "@/components/header";
import Hero from "@/components/Hero";
import Footer from "@/components/footer";
import Trending from "@/components/trending";
import Favorate from "@/components/Favorate";
import AllProducts from "@/components/AllProdects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <Favorate />
      <AllProducts />
      <Testimonials />
    </>
  );
}
