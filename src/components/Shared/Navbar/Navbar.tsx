import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";
import Hero from "@/components/HomePage/Hero/Hero";
import { GIFS, IMAGES } from "../../../../public/assets";
import Image from "next/image";


const Navbar = () => {
    const navlinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/" },
        { label: "Contact", path: "/" },
    ];

    return (
        <div
            className="bg-neutral-30 relative font-Satoshi">
            <Image src={IMAGES.gradientBg} alt="" className="absolute w-full bg-cover bg-center bg-no-repeat z-0" />
            <Container>
                <div className="relative z-10 flex items-center justify-between py-6">
                    <Link href={"/"} className="font-extrabold text-white text-2xl">
                        Inpluto
                    </Link>

                    <div className="flex items-center gap-5">
                        {navlinks.map((link, index) => (
                            <Link href={link.path} key={index} className="text-white font-medium">
                                {link.label}
                            </Link>
                        ))}
                        <button className="border border-white px-4 py-[10px] rounded-lg text-white font-medium cursor-pointer transition-all duration-300 ease-in-out transform active:scale-95">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Hero Section */}
            </Container>
            <Hero />
        </div>
    );
};

export default Navbar;
