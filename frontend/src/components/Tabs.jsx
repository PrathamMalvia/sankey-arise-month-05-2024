const Tabs = () => {
    const tabs = ['Trip', '% Deals', 'Hotel', 'Flight', 'Apartment', 'Camper'];

    return (
        <nav className="hidden md:flex justify-center my-8 overflow-x-auto px-4 md:px-0" aria-label="Main navigation">
            <ul className="flex space-x-4">
                {tabs.map((tab, index) => (
                    <li key={index}>
                        <a

                            href={`#${tab.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex-1 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[150px] px-4 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-[#07689F] hover:text-white transition-colors text-center inline-block"
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Tabs;