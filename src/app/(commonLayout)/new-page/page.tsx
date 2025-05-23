import Image from 'next/image';
import React from 'react';
import { ICONS } from '../../../../public/assets';

const page = () => {
    return (
        <div className="bg-secondary-50 p-7 max-w-[1100px]">
            {/* {data?.full_name} */}
            <div className="bg-white border border-neutral-100 p-9 rounded-3xl">
              <div>
                <Image src={ICONS.leftArrow} alt="left-arrow" className="size-10" />
                <h1 className="text-[28px] font-700 text-neutral-950">Candidate</h1>
              </div>
            </div>
        </div>
    );
};

export default page;