import four1 from '../images/four1.jpeg'
import four2 from '../images/four2.jpeg'
import four3 from '../images/four3.jpeg'
import four4 from '../images/four4.jpeg'

const FourImages = () => {
    const images = [
        { title: 'Reserve Your hotel, Pursue Your Team', image: four1 },
        { title: 'Subscribe Our Newsletter', image: four2 },
        { title: 'Review Hotel Services Worldwide', image: four3 },
        { title: 'Follow the Lates Tour News', image:four4 },
    ];

    return (
        <section className="w-full md:w-4/5 mx-auto my-8 px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((item, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden h-80">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FourImages;