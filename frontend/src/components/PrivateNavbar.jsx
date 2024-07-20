import Logo from '../assets2/headerIcons/Logo.svg';
import SearchIcon from '../assets2/headerIcons/search.svg';
import FlagEngland from '../assets2/headerIcons/Flag England.svg';
import DollarIcon from '../assets2/headerIcons/dollar.svg';
import HelpIcon from '../assets2/headerIcons/help.svg';
import LikeIcon from '../assets2/headerIcons/like.svg';
import PhoneCallIcon from '../assets2/headerIcons/phone-call.svg';
import PhotoIcon from '../assets2/headerIcons/Photo.svg';

const PrivateNavbar = () => {
    return (
        <header className="w-full md:w-4/5 mx-auto my-4 flex flex-wrap justify-between items-center px-4 md:px-0">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <img src={Logo} alt="Logo" className="w-20 h-14" />
                <div className="flex items-center ml-4 w-full md:w-auto">
                    <input
                        type="text"
                        className="w-full md:w-[500px] h-10 border border-gray-300 rounded-md px-2"
                        placeholder="Search"
                    />
                    <img src={SearchIcon} alt="Search" className="w-6 h-6 -ml-8 cursor-pointer" />
                </div>
            </div>
            <div className="hidden md:flex items-center md:space-x-10 mt-4 md:mt-0 w-full md:w-auto">
                <img src={FlagEngland} alt="England Flag" className="w-6 h-6" />
                <img src={DollarIcon} alt="Dollar" className="w-6 h-6" />
                <img src={HelpIcon} alt="Help" className="w-6 h-6" />
                <img src={LikeIcon} alt="Like" className="w-6 h-6" />
                <img src={PhoneCallIcon} alt="Phone Call" className="w-6 h-6" />
            </div>
            <div className="flex items-center mt-4 md:mt-0 w-full md:w-auto">
                <img src={PhotoIcon} alt="Profile" className="w-10 h-10" />
                <div className="ml-2 md:ml-4">
                    <p className="text-sm font-semibold text-[#043E5F]">Your Account</p>
                    <p className="text-xs text-[#07689F]">Anna Carinna</p>
                </div>
            </div>
        </header>
    );
};

export default PrivateNavbar;
