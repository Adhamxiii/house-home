"use client";

import { useEffect } from "react";
import Apartment from "./Apartment";
import Blog from "./Blog";
import BuildingFeature from "./BuildingFeature";
import CityProperties from "./CityProperties";
import Hero from "./Hero";
import Properties from "./Properties";
import Reviews from "./Reviews";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Apartment />
      <Properties />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
      <Blog />
    </div>
  );
};

export default Home;
