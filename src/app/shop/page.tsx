"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileFilter from "@/components/pages/shop/MobileFilter";
import ShopMain from "@/components/pages/shop/ShopMain";
import "swiper/css";

export default function Home() {
  return (
    <>
      <Header />
      <ShopMain />
      <MobileFilter />
      <Footer />
    </>
  );
}
