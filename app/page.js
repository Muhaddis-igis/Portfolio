"use client";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import History from "@/components/History";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Story from "@/components/Story";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, banner_type_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    banner_type_function("image");
  }, []);
  return (
    <TrueManLayout>
      {/* stats */}
      <Counter />
      {/* stats end */}
      {/* text */}
      <Story />
      {/* text end */}
      {/* portfolio section trigger */}
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="portfolio-triger"
      />
      {/* projects */}
      <Projects />
      {/* projects end */}
      {/* resume section trigger */}
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="resume-triger"
      />
      {/* skills */}
      <Skills />
      {/* skills end */}
      {/* history */}
      <History />
      {/* history end */}
      {/* contact section trigger */}
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="contact-triger"
      />
      {/* contact */}
      <Contact />
      {/* contact end */}
    </TrueManLayout>
  );
};
export default Index;
