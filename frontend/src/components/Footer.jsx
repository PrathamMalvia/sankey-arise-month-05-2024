import copyright from '../assets2/footer/copyright.svg';
import mail from '../assets2/footer/mail.svg';
import location from '../assets2/footer/location.svg';
import phone from '../assets2/footer/phone.svg';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-200 py-4">
            <div className="w-full md:w-4/5 mx-auto px-4">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center mb-2 md:mb-0">
                        <img src={copyright} alt="" className="h-4 mr-2" aria-hidden="true" />
                        <span>Copyright EasySet24</span>
                    </div>
                    <div className="flex items-center mb-2 md:mb-0">
                        <img src={mail} alt="" className="h-4 mr-2" aria-hidden="true" />
                        <a href="mailto:easyset24@gmail.com" aria-label="Email us">easyset24@gmail.com</a>
                    </div>
                    <p className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
                        EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!
                    </p>
                    <div className="flex items-center mb-2 md:mb-0">
                        <img src={location} alt="" className="h-4 mr-2" aria-hidden="true" />
                        <address>123 Oxford Street, London</address>
                    </div>
                    <div className="flex items-center">
                        <img src={phone} alt="" className="h-4 mr-2" aria-hidden="true" />
                        <a href="tel:+442071234567" aria-label="Call us">+44 20 7123 4567</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;