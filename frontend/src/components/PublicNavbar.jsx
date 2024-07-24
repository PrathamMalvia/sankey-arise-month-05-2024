import Logo from '../assets1/Logo.svg';
import Question from '../assets1/Question.svg';
import England from '../assets1/England.svg';

const PublicNavbar = () => {
    return (
        <nav className="container mx-auto w-full md:w-10/12 flex items-center justify-between px-4 md:px-0">
            <a href="/" className="w-16 h-16 md:w-24 md:h-24">
                <img src={Logo} alt="EasySet24 Logo" className="w-full h-full object-contain" />
            </a>

            <div className="flex items-center gap-2 md:gap-4">
                <button aria-label="Change language" className="w-8 h-8 md:w-12 md:h-12">
                    <img src={England} alt="English language" className="w-full h-full object-contain" />
                </button>
                <button aria-label="Get help" className="w-8 h-8 md:w-12 md:h-12">
                    <img src={Question} alt="Help" className="w-full h-full object-contain" />
                </button>
            </div>
        </nav>
    )
}

export default PublicNavbar;