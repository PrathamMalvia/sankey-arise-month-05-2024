const AboutUs = () => {
    const sections = [
        { title: 'About Us', items: ['Our Story', 'Work with us', 'Press & media', 'Privacy & Security'] },
        { title: 'We Offer', items: ['Trip Sponsorship', 'Last Minutes Flights', 'Best Deals', 'AI-Driven Search'] },
        { title: 'Headquarters', items: ['England', 'France', 'Canada', 'Iceland'] },
        { title: 'Travel Blogs', items: ['Bali Travel Guide', 'Sri Travel Guide', 'Peru Travel Guide', 'Swiss Travel Guide'] },
        { title: 'Activities', items: ['Tour Leading', 'Cruising & sailing', 'Camping', 'Kayaking'] },
        { title: 'Service', items: ['Report Error', 'Ask online', 'Travel insurance'] },
    ];

    return (
        <section className="w-full md:w-4/5 mx-auto my-8 px-4 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {sections.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-lg md:text-xl mb-4">{section.title}</h3>
                        <ul>
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-base text-gray-700 mb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
