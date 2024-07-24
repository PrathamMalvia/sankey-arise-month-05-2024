import mk1 from '../images/mk1.jpeg'
import mk2 from '../images/mk2.jpeg'

const MakeComparison = () => {
    return (
        <section className="w-full md:w-4/5 mx-auto my-8 px-4 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Make A Comparison</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <article className="relative w-full md:w-1/2 h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                    <img src={mk1} alt="Highly reviewed travel offers" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <p className="text-white text-sm md:text-base lg:text-lg font-bold">The past offers with the highest reviews outshine others, standing as a testament to their exceptional quality.</p>
                    </div>
                </article>
                <article className="relative w-full md:w-1/2 h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                    <img src={mk2} alt="New Year's celebration in New York City" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <p className="text-white text-sm md:text-base lg:text-lg font-bold">Ring in the new year with iconic moments and unforgettable memories in New York City.</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default MakeComparison;