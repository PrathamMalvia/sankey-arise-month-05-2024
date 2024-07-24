import Instagram from '../assets2/footer/Instagram.svg';
import Linkedin from '../assets2/footer/Linkedin.svg';
import Telegram from '../assets2/footer/Telegram.svg';
import Twitter from '../assets2/footer/Twitter.svg';
import Visa from '../assets2/footer/Visa.svg';
import Amex from '../assets2/footer/Amex.svg';
import MasterCard from '../assets2/footer/MasterCard.svg';
import Paypal from '../assets2/footer/Paypal.svg';

const PaySocial = () => {
    const paymentMethods = [
        { name: 'Visa', icon: Visa },
        { name: 'American Express', icon: Amex },
        { name: 'MasterCard', icon: MasterCard },
        { name: 'PayPal', icon: Paypal }
    ];
    const socialMedia = [
        { name: 'LinkedIn', icon: Linkedin },
        { name: 'Telegram', icon: Telegram },
        { name: 'Twitter', icon: Twitter },
        { name: 'Instagram', icon: Instagram }
    ];

    return (
        <section className="w-full md:w-4/5 mx-auto my-8 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-wrap gap-4 mb-4 md:mb-0 justify-center">
                    {paymentMethods.map((method, index) => (
                        <img key={index} src={method.icon} alt={`Pay with ${method.name}`} className="h-12" />
                    ))}
                </div>
                <nav className="flex flex-wrap gap-4 mb-4 md:mb-0 justify-center" aria-label="Social media links">
                    {socialMedia.map((platform, index) => (
                        <a key={index} href={`#${platform.name.toLowerCase()}`} aria-label={`Follow us on ${platform.name}`}>
                            <img src={platform.icon} alt="" className="h-6" aria-hidden="true" />
                        </a>
                    ))}
                </nav>
                <div className="w-full md:w-1/3">
                    <p className="text-sm font-semibold mb-2">Email</p>
                    <form className="flex flex-col md:flex-row">
                        <label htmlFor="email-input" className="sr-only">Enter your email</label>
                        <input type="email" id="email-input" placeholder="✉️ Enter Your email" className="flex-grow p-2 border border-gray-300 rounded-l-md mb-2 md:mb-0 md:rounded-r-none" />
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md md:rounded-l-none">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PaySocial;