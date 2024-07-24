import so1 from '../images/so1.jpeg';
import so2 from '../images/so2.jpeg';
import so3 from '../images/so3.jpeg';
import so4 from '../images/so4.jpeg';
import so5 from '../images/so5.jpeg';
import so6 from '../images/so6.jpeg';
import arrowRight from '../assets3/arrow-right.svg'

const SpecialOffers = () => {
    const offers = [
        { title: 'Loyalty Discounts', image: so1 },
        { title: 'Early Booking Discounts', image: so2 },
        { title: 'Last-Minute Deals', image: so3 },
        { title: 'Family Packages', image: so4 },
        { title: 'Birthday or Anniversary Specials', image: so5 },
        { title: 'Referral Programs', image: so6 },
    ];

    return (
        <section className="w-full md:w-4/5 mx-auto my-8 px-4 overflow-hidden rounded-b-lg relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Special Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {offers.map((offer, index) => (
                    <article key={index} className="relative overflow-hidden rounded-lg">
                        <img src={offer.image} alt={`${offer.title} special offer`} className="w-full h-60 object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <a href={`#${offer.title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-[#07689F] text-white font-semibold p-1 rounded-sm flex items-center gap-2">
                                {offer.title}
                                <img src={arrowRight} alt="" aria-hidden="true" />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default SpecialOffers;