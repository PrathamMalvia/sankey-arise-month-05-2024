import HotelIcon from '../assets3/hotel.svg';
import DropDownIcon from '../assets3/drop-down-list.svg';
import PeopleIcon from '../assets3/people.svg';
import CalendarIcon from '../assets3/calendar.svg';

const SearchTabs = () => {
    return (
        <section className="w-full md:w-4/5 mx-auto my-8 px-4">
            <h2 className="sr-only">Search for Hotels</h2>
            <form className="flex flex-wrap gap-2 md:gap-4 items-start md:items-end">
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <label htmlFor="place" className="text-xs font-bold mb-1 block text-center md:text-left">Place</label>
                    <button id="place" className="w-full flex items-center justify-between bg-white border border-gray-300 p-2 rounded h-[48px]">
                        <div className="flex items-center">
                            <img src={HotelIcon} alt="" className="w-6 h-6 mr-2" aria-hidden="true" />
                            <span className="text-sm">Gutenberg</span>
                        </div>
                    </button>
                </div>
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <label htmlFor="vip" className="text-xs font-bold mb-1 block text-center md:text-left">VIP</label>
                    <button id="vip" className="w-full flex items-center justify-between bg-white border border-gray-300 p-2 rounded h-[48px]">
                        <span className="text-sm">Long Lasting</span>
                        <img src={DropDownIcon} alt="" className="w-4 h-4" aria-hidden="true" />
                    </button>
                </div>
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <label htmlFor="passengers" className="text-xs font-bold mb-1 block text-center md:text-left">Passengers - Room Condition</label>
                    <button id="passengers" className="w-full flex items-center justify-between bg-white border border-gray-300 p-2 rounded h-[48px]">
                        <div className="flex items-center">
                            <img src={PeopleIcon} alt="" className="w-6 h-6 mr-2" aria-hidden="true" />
                            <span className="text-sm">2 Adults - 3 Children</span>
                        </div>
                        <img src={DropDownIcon} alt="" className="w-4 h-4" aria-hidden="true" />
                    </button>
                </div>
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <label htmlFor="dates" className="text-xs font-bold mb-1 block text-center md:text-left">Check In - Check Out</label>
                    <button id="dates" className="w-full flex items-center justify-between bg-white border border-gray-300 p-2 rounded h-[48px]">
                        <div className="flex items-center">
                            <img src={CalendarIcon} alt="" className="w-6 h-6 mr-2" aria-hidden="true" />
                            <span className="text-sm">18 Dec 2023 - 23 Dec 2023</span>
                        </div>
                    </button>
                </div>
                <div className="flex-1 min-w-[120px] md:min-w-[150px] p-1">
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded h-[48px] flex items-center justify-center">
                        Search
                    </button>
                </div>
            </form>
        </section>
    );
};

export default SearchTabs;