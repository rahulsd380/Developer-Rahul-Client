import Image from 'next/image';
import React from 'react';
import { ICONS, IMAGES } from '../../../../public/assets';
import Container from '@/components/Reusable/Container/Container';
import FeatureCard from './FeatureCard';

const OurFeatures = () => {
    const features = [
        { icon: ICONS.lightBulbIdea, title: "Strategy & Matchmaking", description: "Connect with the right influencers through AI-driven matchmaking, ensuring your brand reaches the perfect audience." },
        { icon: ICONS.write, title: "Content Creation & Support", description: "Empower influencers with high-quality, engaging content that resonates with their followers and amplifies your brand message." },
        { icon: ICONS.megaphone, title: "Full-Service Campaign Management", description: "From strategy to execution, we handle everything—ensuring your influencer campaigns run seamlessly and successfully." },
        { icon: ICONS.chart2, title: "Analytics & Reporting", description: "Track, analyze, and optimize your campaigns with real-time insights to maximize ROI and engagement." },
        { icon: ICONS.globe, title: "Multilingual & Multicultural Reach", description: "Expand your brand’s influence with localized content, reaching diverse audiences across cities and regions." },
        { icon: ICONS.testTubeMinimalistic, title: "Creative Testing Like Never Before", description: "Run 100+ content variations at once to identify the top-performing creatives for better ROI." },
        { icon: ICONS.target, title: "Targeted Engagements", description: "Deliver hyper-focused content to the right audience, ensuring higher visibility and meaningful interactions." },
        { icon: ICONS.bag, title: "Influence-Driven Purchases", description: "Tap into consumer trust—80% of buyers make a purchase based on an influencer’s recommendation." },
        { icon: ICONS.chessKing, title: "Affordable Creative Production", description: "Get high-quality, cost-effective influencer content that’s cheaper than traditional media, enabling quick iterations." },
    ];
    return (
        <div className='w-full font-Satoshi relative pb-20'>
            <div className="relative w-full h-[1300px]">
            <div className='h-[648px] absolute w-full flex items-center justify-center'>
                <Image src={IMAGES.ourFeaturesBg} alt="" className="w-full h-[648px]" />
                <div className="flex flex-col items-center justify-center z-50 absolute top-32 right-0 left-0">
                    <div className='text-center mx-auto'>
                        <h1 className="font-bold text-[64px] leading-[72px] max-w-[808px] text-white">
                            Everything You Need for Effortless Campaigns
                        </h1>
                        <p className="text-gray-15 text-[28px] leading-8 max-w-[698px] mx-auto mt-4 font-normal">
                            We connect you with the right influencers, streamline content creation, and track performance.
                        </p>
                    </div>
                </div>
            </div>

            <div className='absolute w-full mx-auto top-[450px]'>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))
                        }
                    </div>

                    <button className="bg-gradient-primary px-8 py-4 rounded-xl flex items-center gap-[10px] font-medium text-xl leading-6 w-fit mx-auto cursor-pointer 
                    transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-white mt-10 shadow-custom-button">
                        Get Started
                        <Image src={ICONS.rightArrow} alt="right-arrow" className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </button>
                </Container>
            </div>
        </div>
        </div>
    );
};

export default OurFeatures;