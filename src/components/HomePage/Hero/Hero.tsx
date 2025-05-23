"use client"
import { useEffect, useRef, useState } from "react";
// import "./Hero.css"
import Link from "next/link";
import { GIFS, ICONS } from "../../../../public/assets";
import Image from "next/image";
import FeaturesTab from "../FeaturesTab/FeaturesTab";
import WhyInpluto from "@/components/Shared/WhyInpluto/WhyInpluto";
import Container from "@/components/Reusable/Container/Container";

const Hero = () => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const items = [
        {
            name: "Tiktok",
            icon: ICONS.instagram
        },
        {
            name: "Youtube",
            icon: ICONS.instagram
        },
        {
            name: "Tiktok",
            icon: ICONS.instagram
        },
        {
            name: "Youtube",
            icon: ICONS.instagram
        },
    ];

    // To handle the dropdown click event
    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);

    return (
        <div className="relative z-10 text-center text-white mt-20 font-Satoshi">
            <Container>
                <div className="flex flex-col gap-8 z-0 h-full sticky top-0">
                    <div className="bg-neutral-10 border-2 border-neutral-25 px-5 py-[10px] rounded-3xl backdrop-blur-xs text-gray-10 font-medium uppercase w-fit mx-auto">
                        Influencer Marketing, Simplified.
                    </div>

                    <div>
                        <h1 className="font-bold text-[80px] leading-[88px] max-w-[900px] mx-auto">
                            Find Influencers That Drive Real Results.
                        </h1>
                        <p className="text-gray-15 text-[28px] leading-8 max-w-[650px] mx-auto mt-4">
                            Discover data-driven influencer matches, manage campaigns, and measure ROI seamlessly.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-neutral-15 border-2 border-neutral-25 p-[6px] rounded-[100px] backdrop-blur-xs max-w-[850px] w-full mx-auto flex items-center justify-between mt-6">
                        {/* Dropdown */}
                        <div ref={dropDownRef} className="relative max-w-[177px] w-full text-white text-xl leading-6">
                            <button
                                onClick={() => setOpen((prev) => !prev)}
                                className="flex items-center gap-[6px] p-4 rounded-3xl bg-neutral-20 max-w-[177px] w-full cursor-pointer">
                                <Image src={ICONS.instagram} alt="instagram-icon" className="size-6" />
                                Instagram
                                <Image src={ICONS.downArrow} alt="down-arrow" className="size-6" />
                            </button>
                            {open && (
                                <div className="absolute top-16 w-full rounded-2xl z-50 bg-neutral-20 opacity-100 duration-500 p-2 space-y-1">
                                    {items.map((item, idx) => (
                                        <button key={idx} className="px-4 py-3 flex items-center gap-[6px] cursor-pointer">
                                            <Image src={item.icon} alt="instagram-icon" className="size-6" />
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <input type="text" className="bg-transparent outline-none text-white max-w-[569px] w-full" placeholder="Search Influencers, Categories, etc.," />

                        <button className="bg-gradient-primary size-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95">
                            <Image src={ICONS.search} alt="search-icon" className="size-6" />
                        </button>
                    </div>

                    {/* Signup button */}
                    <div className="flex flex-col gap-4">
                        <button className="bg-gradient-primary px-8 py-4 rounded-xl flex items-center gap-[10px] font-medium text-xl leading-6 w-fit mx-auto cursor-pointer 
                    transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-custom-button">
                            Sign up for free
                            <Image src={ICONS.rightArrow} alt="right-arrow" className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                        </button>

                        <Link href={"/"} className="font-Satoshi font-bold text-xl leading-6 underline transition-all duration-300 ease-in-out transform active:scale-95">
                            I’m a Creator
                        </Link>
                    </div>
                </div>
                
                <div className="rounded-4xl border-2 border-gray-25 bg-primary-10 shadow-custom-hero backdrop:backdrop-blur-[12.5px] p-8 mt-[75px] z-50 relative">
                    <Image src={GIFS.codeGifs} alt="code-animation" className="rounded-[20px]" />
                </div>
            </Container>
            <div className="bg-neutral-35 z-50 absolute -bottom-[240px] w-full">
                <FeaturesTab />
                <WhyInpluto />
            </div>
        </div>
    );
};

export default Hero;