import Image from 'next/image';
import React from 'react';
import { ICONS, IMAGES } from '../../../../public/assets';
import Container from '@/components/Reusable/Container/Container';

const JoinUs = () => {
    return (
        <Container>
            <div className="py-[100px] flex items-center justify-center bg-neutral-30 rounded-4xl shadow-custom-joinus relative">
                <Image src={IMAGES.joinUsBg} alt="" className="absolute top-0 bottom-0 right-0 left-0 w-full h-full rounded-4xl" />
                <div>
                    <h1 className="font-bold text-[48px] leading-[56px] text-white text-center mt-2">
                        Join 1,600+ high performing clients
                    </h1>

                    <p className="text-gray-20 text-2xl leading-7 mt-2 text-center max-w-[762px] mx-auto">You’ll be in great company. Chosen by the most demanding influencer marketing experts at top brands and agencies,</p>
                    <button className="bg-gradient-primary px-8 py-4 rounded-xl flex items-center gap-[10px] font-medium text-xl leading-6 w-fit mx-auto cursor-pointer 
                transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-white mt-8 shadow-custom-button">
                        Get Started
                        <Image src={ICONS.rightArrow} alt="right-arrow" className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default JoinUs;