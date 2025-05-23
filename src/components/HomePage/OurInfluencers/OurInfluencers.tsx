"use client"
import Heading from "@/components/Reusable/Heading/Heading";
import { useState } from "react";
import InfluencerCard from "./InfluencerCard";
import Container from "@/components/Reusable/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { ICONS } from "../../../../public/assets";

const OurInfluencers = () => {
    const [activeTab, setActiveTab] = useState<string>("Lifestyle");
    const influencerCategoryButtons = [
        "Lifestyle",
        "Travel",
        "Food",
        "Beauty",
        "Tech"
    ];
    return (
        <div className="py-[220px] font-Satoshi">
            <Container>
                <Heading subHeading="OUR INFLUENCERS" heading="Influencers that trust our platform" />

                <div className="flex items-center justify-center gap-3 mt-[56px]">
                    {
                        influencerCategoryButtons.map(btn =>
                            <button key={btn} onClick={() => setActiveTab(btn)} className={`cursor-pointer hover:bg-neutral-40 transition duration-500 rounded-[100px] px-6 py-[10px] font-Satoshi text-2xl leading-7 border-2 ${activeTab === btn ? "text-primary-15 border-primary-15" : "text-neutral-50 border-neutral-50 bg-neutral-35"}`}>{btn}</button>
                        )
                    }
                </div>

                <div className="mt-8">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={32}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {[...Array(8)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <InfluencerCard />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <button className="bg-gradient-primary px-8 py-4 rounded-xl flex items-center gap-[10px] font-medium text-xl leading-6 w-fit mx-auto cursor-pointer 
                transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-white mt-12 shadow-custom-button">
                    Get Started
                    <Image src={ICONS.rightArrow} alt="right-arrow" className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </button>
            </Container>
        </div>
    );
};

export default OurInfluencers;