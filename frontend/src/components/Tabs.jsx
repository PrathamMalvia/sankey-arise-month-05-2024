const Tabs = () => {
    const tabs = ['Trip', '% Deals', 'Hotel', 'Flight', 'Apartment', 'Camper'];

    return (
        <div className="hidden md:flex justify-center my-8 overflow-x-auto px-4 md:px-0">
            <div className="flex space-x-4">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className="flex-1 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[150px] px-4 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-[#07689F] hover:text-white transition-colors text-center"
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
