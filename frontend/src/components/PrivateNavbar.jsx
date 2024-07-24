import Logo from '../assets2/headerIcons/Logo.svg';
import SearchIcon from '../assets2/headerIcons/search.svg';
import FlagEngland from '../assets2/headerIcons/Flag England.svg';
import DollarIcon from '../assets2/headerIcons/dollar.svg';
import HelpIcon from '../assets2/headerIcons/help.svg';
import LikeIcon from '../assets2/headerIcons/like.svg';
import PhoneCallIcon from '../assets2/headerIcons/phone-call.svg';
import PhotoIcon from '../assets2/headerIcons/Photo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PrivateNavbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');

            if (token && userId) {
                try {
                    const response = await axios.get(`http://localhost:4000/api/users/${userId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (response.data.user) {
                        setUser(response.data.user);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, []);

    return (
        <header className="w-full md:w-4/5 mx-auto my-4 flex flex-wrap justify-between items-center px-4 md:px-0">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <img src={Logo} alt="EasySet24 Logo" className="w-20 h-20" />
                <form className="flex items-center ml-4 w-full md:w-auto">
                    <label htmlFor="search-input" className="sr-only">Search</label>
                    <input
                        type="text"
                        id="search-input"
                        className="w-full md:w-[500px] h-10 border border-gray-300 rounded-md px-2"
                        placeholder="Search"
                    />
                    <button type="submit" aria-label="Search">
                        <img src={SearchIcon} alt="" className="w-6 h-6 -ml-8 cursor-pointer" aria-hidden="true" />
                    </button>
                </form>
            </div>
            <nav className="hidden md:flex items-center md:space-x-10 mt-4 md:mt-0 w-full md:w-auto" aria-label="User actions">
                <a href="#language" aria-label="Change language"><img src={FlagEngland} alt="English language" className="w-6 h-6" /></a>
                <a href="#currency" aria-label="Change currency"><img src={DollarIcon} alt="US Dollar currency" className="w-6 h-6" /></a>
                <a href="#help" aria-label="Get help"><img src={HelpIcon} alt="Help" className="w-6 h-6" /></a>
                <a href="#favorites" aria-label="View favorites"><img src={LikeIcon} alt="Favorites" className="w-6 h-6" /></a>
                <a href="#contact" aria-label="Contact us"><img src={PhoneCallIcon} alt="Contact" className="w-6 h-6" /></a>
            </nav>
            <div className="flex items-center mt-4 md:mt-0 w-full md:w-auto">
                <img src={PhotoIcon} alt="" className="w-10 h-10" aria-hidden="true" />
                <div className="ml-2 md:ml-4">
                    <p className="text-sm font-semibold text-[#043E5F]">Your Account</p>
                    <p className="text-xs text-[#07689F]">{user ? `${user.firstName} ${user.lastName}` : `Loading...`}</p>
                </div>
            </div>
        </header>
    );
};

export default PrivateNavbar;