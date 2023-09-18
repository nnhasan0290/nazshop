"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NewArrival from "@/components/NewArrival/NewArrival";
import "swiper/css";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <NewArrival />
      <Footer />
    </>
  );
}
