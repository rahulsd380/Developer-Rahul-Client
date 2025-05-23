
type THeading = {
    subHeading?: string;
    heading: string;
    description?: string;
}
const Heading: React.FC<THeading> = ({ subHeading, heading, description }) => {
    return (
        <div className="font-Satoshi">
            <h2 className="font-bold uppercase text-xl leading-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8C52FF] to-[#A276FA] text-center">{subHeading}</h2>
            <h1 className="font-bold text-[48px] leading-[56px] text-white text-center mt-2">
                {heading}
            </h1>
            {
                description &&
                <p className="text-gray-20 text-2xl leading-7 mt-1 text-center">{description}</p>
            }
        </div>
    );
};

export default Heading;