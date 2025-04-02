"use client"
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import Ripples from "react-ripples";
import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CircularAnimatedImg from "./CircularAnimatedImg/CircularAnimatedImg";
import { ICONS, IMAGES } from "../../../../public";
import Container from "@/components/Reusable/Container/Container";

const TEXTS = [
  "FULL-STACK WEB DEVELOPER",
  "FRONT-END WEB DEVELOPER",
  "MERN-STACK WEB DEVELOPER",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  const router = useRouter();
  const navigateToTalk = () => {
    router.push("/");

    // Delay scrolling for 100 milliseconds (adjust as needed)
    setTimeout(() => {
      const contactMe = document.getElementById("contact-me");
      contactMe?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
      <div id="home" className="relative">
      <div className="absolute left-1 -top-20">
        <Image src={IMAGES.e1} alt="" />
      </div>
      <Container>
      <div
      className="mt-16 lg:mt-0 flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between px-3 xl:px-0">
      

      <div className="">
        <p className="text-[#939393] font-Poppins text-[35px] font-normal text-balance mb-16 lg:mb-8 ">
          <TextTransition direction="down" springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </p>

        <p className="text-white">
          Hello, I’m
        </p>
        <h1 className="bg-gradient-to-br from-blue-600 to-indigo-300 bg-clip-text text-transparent text-5xl md:text-[65px] font-bold leading-[60px] md:leading-[80px] mt-1 font-Sora">
          Rahul Sutradhar{" "}
        </h1>
        <p className="text-[#939393] font-Poppins text-[12px] md:text-[18px] font-normal mt-4 mb-8">
          Experienced MERN full stack developer adept at crafting robust web
          applications with a focus on scalability and user experience.
        </p>

        {/* <Link onClick={navigateToTalk} className="bg-gradient-to-br from-blue-500 to-indigo-800 py-3 px-8 font-Poppins text-white rounded-[10px] flex items-center gap-2">
          <div className="">
          Let’s Talk Us
          <img className="w-5" src={talk} alt="" />
          </div>
        </Link> */}

        <Ripples onClick={navigateToTalk} during={1500}>
          <button className="border border-blue-700 bg-gradient-to-br from-blue-500 to-indigo-800 transition duration-300 py-4 px-8 font-Poppins text-white rounded-[30px] flex items-center gap-2">
            Let’s Talk Us
            <Image className="w-5" src={ICONS.contact} alt="" />
          </button>
        </Ripples>
      </div>


      {/* <img
        data-aos="fade-left"
        data-aos-duration="2000"
        className="w-[500px] lg:w-[420px]"
        src={img}
        alt=""
      /> */}

      <CircularAnimatedImg />
      {/* <Nex/> */}

      {/* <div className="absolute -right-24 -top-10 ">
        <img src={e2} alt="" />
      </div> */}
    </div>
      </Container>
      </div>
  );
};

export default Hero;
