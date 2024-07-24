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
        <section className="w-full md:w-4/5 mx-auto my-8 px-4">
            <h2 className="sr-only">About EasySet24</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {sections.map((section, index) => (
                    <nav key={index} aria-labelledby={`section-${index}`}>
                        <h3 id={`section-${index}`} className="font-semibold text-lg md:text-xl mb-4">{section.title}</h3>
                        <ul>
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-base text-gray-700 mb-2">
                                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;