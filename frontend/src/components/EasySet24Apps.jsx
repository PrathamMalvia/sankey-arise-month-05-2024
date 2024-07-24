import apple from '../assets2/apps/apple.svg'
import google from '../assets2/apps/google.svg'
import QRCode from '../assets2/apps/QRCode.svg'

const EasySet24Apps = () => {
    return (
        <section className="w-full lg:w-4/5 mx-auto my-8 px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-[#07689F] mb-4">Go Further With The EasySet24 App</h2>
                <p className="text-gray-700 mb-4">
                    Enjoy savings on chosen hotels and flights when you book through the EasySet24 website. Additionally, earn One Key Cash for every booking made through the app.
                </p>
                <p className="text-sm text-gray-500">Secured By Europe GTP</p>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
                    <a href="#apple-download">
                        <img src={apple} alt="Download EasySet24 app on Apple App Store" className="h-10 object-contain" />
                    </a>
                    <img src={QRCode} alt="QR code for Apple App Store download" className="h-10 object-contain" />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
                    <a href="#google-play-download">
                        <img src={google} alt="Download EasySet24 app on Google Play Store" className="h-10 object-contain" />
                    </a>
                    <img src={QRCode} alt="QR code for Google Play Store download" className="h-10 object-contain" />
                </div>
            </div>
        </section>
    );
};

export default EasySet24Apps;