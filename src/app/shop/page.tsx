"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ShopMain from "@/components/pages/shop/ShopMain";
import "swiper/css";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <ShopMain />
      <Footer />
    </div>
  );
}
