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
        { name: 'Amex', icon: Amex },
        { name: 'MasterCard', icon: MasterCard },
        { name: 'Paypal', icon: Paypal }
    ];
    const socialMedia = [
        { name: 'Linkedin', icon: Linkedin },
        { name: 'Telegram', icon: Telegram },
        { name: 'Twitter', icon: Twitter },
        { name: 'Instagram', icon: Instagram }
    ];

    return (
        <section className="w-full md:w-4/5 mx-auto my-8 px-4 ">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex gap-4 mb-4 md:mb-0">
                    {paymentMethods.map((method, index) => (
                        <img key={index} src={method.icon} alt={method.name} className="h-12" />
                    ))}
                </div>
                <div className="flex gap-8 mb-4 md:mb-0">
                    {socialMedia.map((platform, index) => (
                        <img key={index} src={platform.icon} alt={platform.name} className="h-6" />
                    ))}
                </div>
                <div className="w-full md:w-1/3">
                    <p className="text-sm font-semibold mb-2">Email</p>
                    <div className="flex">
                        <input type="email" placeholder={`✉️ Enter Your email`} className="flex-grow p-2 border border-gray-300 rounded-l-md" />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaySocial;
