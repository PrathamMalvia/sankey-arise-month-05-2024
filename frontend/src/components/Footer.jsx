import copyright from '../assets2/footer/copyright.svg';
import mail from '../assets2/footer/mail.svg';
import location from '../assets2/footer/location.svg';
import phone from '../assets2/footer/phone.svg';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-200 py-4">
            <section className="w-full md:w-4/5 mx-auto px-4 ">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center mb-2 md:mb-0">
                        <img src={copyright} alt="Copyright" className="h-4 mr-2" />
                        <span>Copyright EasySet24</span>
                    </div>
                    <div className="flex items-center mb-2 md:mb-0">
                        <img src={mail} alt="Email" className="h-4 mr-2" />
                        <span>easyset24@gmail.com</span>
                    </div>
                    <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
                        EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!
                    </div>
                    <div className="flex items-center mb-2 md:mb-0">
                        <img src={location} alt="Location" className="h-4 mr-2" />
                        <span>123 Oxford Street, London</span>
                    </div>
                    <div className="flex items-center">
                        <img src={phone} alt="Phone" className="h-4 mr-2" />
                        <span>+44 20 7123 4567</span>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;