import beachImage from '../images/beachImage.jpeg';

const BeachImage = () => {
    return (
        <section className="relative w-full h-[40rem] md:h-[30rem] lg:h-[40rem]">
            <img
                src={beachImage}
                alt="Beach"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Why Choose Us?</h2>
                <button className="bg-[#07689F] text-white px-4 py-2 rounded text-sm md:text-base">Explore More</button>
            </div>
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center px-4">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-thin">Exclusive Hotel Search!</h1>
            </div>
            <div className="absolute flex items-center gap-2 bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 md:w-4/5 mx-auto px-4">
                <button className="bg-[#D9D9D9] text-[#07689F] px-4 py-2 rounded-t-md text-xs md:text-sm font-bold w-full">Special offers</button>
                <button className="bg-[#D9D9D9] text-[#07689F] px-4 py-2 rounded-t-md text-xs md:text-sm font-bold w-full">Last Search</button>
                <button className="bg-[#D9D9D9] text-[#07689F] px-4 py-2 rounded-t-md text-xs md:text-sm font-bold w-full">Trending destinations</button>
                <button className="bg-[#D9D9D9] text-[#07689F] px-4 py-2 rounded-t-md text-xs md:text-sm font-bold w-full">Highest Reviewed</button>
            </div>
        </section>
    );
};

export default BeachImage;


/*
<div className="absolute flex items-center gap-2 bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 md:w-4/5 mx-auto px-4">
*/