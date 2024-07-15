import Logo from '../assets/Logo.svg';
import Question from '../assets/Question.svg';
import England from '../assets/England.svg';

const Navbar = () => {
    return (
        <div className="container mx-auto w-full md:w-10/12 flex items-center justify-between px-4 md:px-0">
            <div className="w-16 h-16 md:w-24 md:h-24">
                <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <img src={England} alt="England" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                <img src={Question} alt="Question" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
            </div>
        </div>
    )
}

export default Navbar;
