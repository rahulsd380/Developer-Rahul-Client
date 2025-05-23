import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { ICONS, IMAGES } from "../../../../public/assets";
import { footerLinks } from "./footerLinks";
import Heading from "@/components/Reusable/Heading/Heading";
import JoinUs from "../JoinUs/JoinUs";

const Footer = () => {
    return (
        <div className="bg-neutral-45 pt-[230px] pb-[64px] relative mt-[256px]">
            <div className="absolute w-full -top-[260px]">
                <JoinUs />
            </div>
            <Container>

                <div className="flex justify-between">
                    <div>
                        <Link href={"/"} className="font-extrabold text-white text-2xl">
                            Inpluto
                        </Link>
                        <p className="text-gray-20 leading-5 max-w-[267px] my-5">
                            123, XYZ Street, PQR Area
                            Maharastra, India.
                        </p>
                        <a href="callto:+91 12345 67890" className="text-gray-20 leading-5 hover:underline">+91 12345 67890</a>
                    </div>

                    {/* Links */}
                    <div className="flex gap-[50px]">
                        {
                            footerLinks?.map(item =>
                                <div key={item.title} className="flex flex-col gap-[10px]">
                                    <h1 className="text-white  font-medium leading-5">Product</h1>
                                    {
                                        item.links?.map(link =>
                                            <Link href={link.path} key={link.label} className="text-gray-20 leading-5 hover:underline">
                                                {link.label}
                                            </Link>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>

                <hr className="border border-neutral-40 w-full my-8" />

                {/* Copyright & Social Media Icons */}
                <div className="flex items-center justify-between">
                    <p className="text-gray-35 leading-5">©2025 In Pluto. All rights reserved</p>
                    <div className="flex items-center gap-4">
                        <a href="" target="_blank">
                            <Image src={ICONS.linkedin} alt="linkedin" className="size-5" />
                        </a>
                        <a href="" target="_blank">
                            <Image src={ICONS.instagram2} alt="instagram" className="size-5" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;