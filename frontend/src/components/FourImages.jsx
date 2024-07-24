import four1 from '../images/four1.jpeg'
import four2 from '../images/four2.jpeg'
import four3 from '../images/four3.jpeg'
import four4 from '../images/four4.jpeg'

const FourImages = () => {
    const images = [
        { title: 'Reserve Your hotel, Pursue Your Team', image: four1, alt: 'Hotel reservation concept' },
        { title: 'Subscribe Our Newsletter', image: four2, alt: 'Newsletter subscription illustration' },
        { title: 'Review Hotel Services Worldwide', image: four3, alt: 'Global hotel review concept' },
        { title: 'Follow the Latest Tour News', image: four4, alt: 'Travel news update illustration' },
    ];

    return (
        <section className="w-full md:w-4/5 mx-auto my-8 px-4">
            <h2 className="sr-only">Featured Travel Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((item, index) => (
                    <article key={index} className="relative rounded-lg overflow-hidden h-80">
                        <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default FourImages;