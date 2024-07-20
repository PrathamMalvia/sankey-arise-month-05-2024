import HotelIcon from '../assets3/hotel.svg';
import DropDownIcon from '../assets3/drop-down-list.svg';
import PeopleIcon from '../assets3/people.svg';
import CalendarIcon from '../assets3/calendar.svg';

const SearchTabs = () => {
    return (
        <div className="w-full md:w-4/5 mx-auto my-8 px-4">
            <div className="flex flex-wrap gap-2 md:gap-4 items-start md:items-end"> 
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <p className="text-xs font-bold mb-1 text-center md:text-left">Place</p>
                    <button className="w-full flex items-center justify-between bg-white border border-gray-300 p-2 rounded h-[48px]">
                        <div className="flex items-center">
                            <img src={HotelIcon} alt="Hotel" className="w-6 h-6 mr-2" />
                            <span className="text-sm">Gutenberg</span>
                        </div>
                    </button>
                </div>
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <p className="text-xs font-bold mb-1 text-center md:text-left">VIP</p>
                    <button className="w-full flex items-center justify-between bg-white border border-gray-300 p-2 rounded h-[48px]">
                        <span className="text-sm">Long Lasting</span>
                        <img src={DropDownIcon} alt="Dropdown" className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <p className="text-xs font-bold mb-1 text-center md:text-left">Passengers - Room Condition</p>
                    <button className="w-full flex items-center justify-between bg-white border border-gray-300 p-2 rounded h-[48px]">
                        <div className="flex items-center">
                            <img src={PeopleIcon} alt="People" className="w-6 h-6 mr-2" />
                            <span className="text-sm">2 Adults - 3 Children</span>
                        </div>
                        <img src={DropDownIcon} alt="Dropdown" className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <p className="text-xs font-bold mb-1 text-center md:text-left">Check In - Check Out</p>
                    <button className="w-full flex items-center justify-between bg-white border border-gray-300 p-2 rounded h-[48px]">
                        <div className="flex items-center">
                            <img src={CalendarIcon} alt="Calendar" className="w-6 h-6 mr-2" />
                            <span className="text-sm">18 Dec 2023 - 23 Dec 2023</span>
                        </div>
                    </button>
                </div>
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <button className="w-full bg-blue-600 text-white p-2 rounded h-[48px] flex items-center justify-center">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchTabs;
