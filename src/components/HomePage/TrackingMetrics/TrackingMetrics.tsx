import Image, { StaticImageData } from "next/image";
import { GIFS, IMAGES } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";
import { trackingMetrics } from "./trackingMetricsData";
import Heading from "@/components/Reusable/Heading/Heading";

type TTrackingMetrics = {
    icon : StaticImageData;
    label : string;
}

const TrackingMetrics = () => {
    return (
        <div className="w-full font-Satoshi mt-[330px] relative h-[541px] flex flex-col justify-center items-center">
            <Image src={IMAGES.gradientBg2} alt="" className="absolute w-full bg-cover bg-center bg-no-repeat z-0" />

            <Container>
                <div className="flex flex-col items-center h-full">
                    <Heading subHeading="TRACKING METRICS" heading="AI Enabled Influencer Selection System" />

                    <div className="grid grid-cols-3 gap-[29px] mt-10">
                        {
                            trackingMetrics.map((metric:TTrackingMetrics, index:number) => (
                                <div key={index} className="flex items-center gap-4 rounded-2xl px-[18px] py-4 border border-gray-30 bg-white">
                                    <Image src={metric.icon} alt="" className="size-[64px]" />
                                    <p className="text-neutral-40 leading-7 text-[22px] font-medium">{metric.label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TrackingMetrics;