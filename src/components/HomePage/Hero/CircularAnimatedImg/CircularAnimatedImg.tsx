
import { ICONS } from "../../../../../public";
import "./CircularAnimatedImg.css";
import Image from "next/image";

const CircularAnimatedImg = () => {
  return (
    <div className="container">
      <div className="hero-circle">
        <Image className="inner-img animate-pulse" src={ICONS.react} alt="" />
        <div className="hero-rotate" id="circle">
          <div className="planet">
            <Image src={ICONS.css} alt="" />
          </div>
          <div className="planet">
            <Image src={ICONS.js} alt="" />
          </div>
          <div className="planet">
            <Image src={ICONS.ts} alt="" />
          </div>
          <div className="planet">
            <Image className="" src={ICONS.tailwindcss} alt="" />
          </div>
          <div className="planet">
            <Image src={ICONS.node} alt="" />
          </div>
          <div className="planet">
            <Image src={ICONS.mongodb} alt="" />
          </div>
          <div className="planet">
            <Image src={ICONS.github} alt="" />
          </div>
          <div className="planet">
            <Image src={ICONS.html} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularAnimatedImg;
