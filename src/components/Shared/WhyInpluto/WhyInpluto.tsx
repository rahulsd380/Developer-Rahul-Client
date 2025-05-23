import Container from "@/components/Reusable/Container/Container";
import { IMAGES } from "../../../../public/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const WhyInpluto = () => {
    const logos = [IMAGES.dummyLogo, IMAGES.dummyLogo, IMAGES.dummyLogo, IMAGES.dummyLogo, IMAGES.dummyLogo, IMAGES.dummyLogo, IMAGES.dummyLogo, ]
    return (
        <div className="pt-8">
            <Container>
                <h1 className="text-gray-20 font-Satoshi font-medium text-xl leading-6 text-center">Why you must choose Inpluto</h1>
                <Marquee gradient={false} speed={50} className="mt-[60px] pb-7">
                    {
                        logos.map((logo, index) => (
                            <Image key={index} src={logo} alt="" className="mr-[96px]" />
                        ))
                    }
                </Marquee>
            </Container>
        </div>
    );
};

export default WhyInpluto;