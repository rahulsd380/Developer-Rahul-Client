
type TTestimonialCard = {
    name: string;
    brandName: string;
    review: string;
}
const TestimonialCard: React.FC<TTestimonialCard> = ({ name, brandName, review }) => {
    return (
        <div className="bg-neutral-45 rounded-[20px] p-6 font-Satoshi max-w-[400px] h-[326px] w-full flex flex-col justify-between gap-6 mr-6">
                <p className="text-gray-20 text-lg leading-[26px] h-[209px] overflow-y-auto custom-scrollbar">
                    {review}
                </p>

            <div>
                <h1 className="text-white text-lg font-bold">{name}</h1>
                <p className="text-neutral-60">
                    {brandName}
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;