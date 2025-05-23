import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const InfluencerCard = () => {
    const categories = ["beerbiceps", "motivation", "fitness", "business", "self-improvement", "finance", "technology"];
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="border border-neutral-40 bg-neutral-35 rounded-2xl p-4 max-w-[319px] min-h-[372px] font-Satoshi">
            <Image src={IMAGES.dummyInfluencer} alt="influencer" className="rounded-lg w-full max-h-[200px] object-cover" />
            <h1 className="font-medium text-xl leading-7 text-white mt-4">
                Jack Joseph
            </h1>
            <p className="text-lg leading-[22px] text-gray-20">
                @beerbiceps
            </p>

            <div className="flex items-center gap-2 flex-wrap mt-6">
                {
                    (showAll ? categories : categories.slice(0, 5)).map(category =>
                        <div key={category} className="px-[6px] py-1 bg-neutral-40 rounded-[99px] text-sm leading-[15px] text-gray-35 lowercase">
                            {category}
                        </div>
                    )
                }
                {
                    categories.length > 5 && (
                        <button
                            className="text-sm underline leading-[22px] text-gray-25 cursor-pointer"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "see less" : "see more"}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default InfluencerCard;
