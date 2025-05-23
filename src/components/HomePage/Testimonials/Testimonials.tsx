import Heading from "@/components/Reusable/Heading/Heading";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rahul Sutradhar",
            brandName: "MITRA Consultancy",
            review: "Lorem ipsum dolor sit amet consectetur. Dignissim massa porta ornare duis sed tellus sapien sagittis. Feugiat donec a montes mi elit vel ultrices sit vestibulum. Molestie augue in orci ridiculus aenean vitae volutpat in et. Lorem ipsum dolor sit amet consectetur. Dignissim massa porta ornare duis sed tellus sapien sagittis. Feugiat donec a montes mi elit vel ultrices sit vestibulum. Molestie augue in orci ridiculus aenean vitae volutpat in et."
        },
        {
            name: "Rahul Sutradhar",
            brandName: "MITRA Consultancy",
            review: "Lorem ipsum dolor sit amet consectetur. Dignissim massa porta ornare duis sed tellus sapien sagittis. Feugiat donec a montes mi elit vel ultrices sit vestibulum. Molestie augue in orci ridiculus aenean vitae volutpat in et."
        },
        {
            name: "Rahul Sutradhar",
            brandName: "MITRA Consultancy",
            review: "Lorem ipsum dolor sit amet consectetur. Dignissim massa porta ornare duis sed tellus sapien sagittis. Feugiat donec a montes mi elit vel ultrices sit vestibulum. Molestie augue in orci ridiculus aenean vitae volutpat in et."
        },
        {
            name: "Rahul Sutradhar",
            brandName: "MITRA Consultancy",
            review: "Lorem ipsum dolor sit amet consectetur. Dignissim massa porta ornare duis sed tellus sapien sagittis. Feugiat donec a montes mi elit vel ultrices sit vestibulum. Molestie augue in orci ridiculus aenean vitae volutpat in et."
        },
        {
            name: "Rahul Sutradhar",
            brandName: "MITRA Consultancy",
            review: "Lorem ipsum dolor sit amet consectetur. Dignissim massa porta ornare duis sed tellus sapien sagittis. Feugiat donec a montes mi elit vel ultrices sit vestibulum. Molestie augue in orci ridiculus aenean vitae volutpat in et."
        },
    ];
    return (
        <div className="bg-gradient-dark py-[96px] ">
            <Heading heading="Our Testimonials" description="See how brands and creators are transforming their campaigns with INPLUTO." />
            <Marquee speed={30} className="flex items-center mt-[64px]" direction="left" pauseOnHover>
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.review} {...testimonial} />
                ))}
            </Marquee>
        </div>
    );
};

export default Testimonials;