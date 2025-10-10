import React from "react";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

export default function Home() {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Gallery products={products} />
      <Footer />
      Home
    </div>
  );
}
