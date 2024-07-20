import PropTypes from 'prop-types';
import blueImage from '../images/blueImage.jpeg';
import belgium from '../images/belgium.jpeg';
import amsterdam from '../images/amsterdam.jpeg';
import newJersey from '../images/newJersey.jpeg';
import nepal from '../images/nepal.jpeg';
import gothenburg from '../images/gothenburg.png';

const LocationCard = ({ imageSrc, title, subtitle, className }) => (
    <div className={`bg-white w-full md:w-64 h-32 p-2 flex rounded-md ${className}`}>
        <div className="w-2/5 h-full overflow-hidden">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center ml-4">
            <h5 className="font-bold text-sm">{title}</h5>
            <h6 className="text-xs font-normal">{subtitle}</h6>
        </div>
    </div>
);

LocationCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    className: PropTypes.string,
};

LocationCard.defaultProps = {
    className: '',
};

const BlueImage = () => {
    return (
        <section className="w-full md:w-4/5 mx-auto px-4 overflow-hidden rounded-b-lg relative">
            <img
                src={blueImage}
                alt="Blue background"
                className="w-full h-[30rem] object-cover rounded-b-lg"
            />
            <LocationCard
                imageSrc={belgium}
                title="Belgium"
                subtitle="Bruxelles Gare du Midi"
                className="absolute top-10 left-72 transform -translate-x-1/2"
            />
            <LocationCard
                imageSrc={amsterdam}
                title="Amsterdam"
                subtitle="Bunk"
                className="absolute top-14 right-0 transform -translate-x-1/2"
            />
            <LocationCard
                imageSrc={newJersey}
                title="New Jersey"
                subtitle="Windsor"
                className="absolute bottom-32 left-44 transform -translate-x-1/2 translate-y-1/2"   
            />
            <LocationCard
                imageSrc={nepal}
                title="Nepal"
                subtitle="Hyatt Regency K"
                className="absolute top-32 right-96 transform -translate-x-1/2 translate-y-1/2"
            />
            <LocationCard
                imageSrc={gothenburg}
                title="Gothenburg"
                subtitle="First Hotel G"
                className="absolute bottom-24 right-10 transform -translate-x-1/2 translate-y-1/2"
            />
        </section>
    );
};

export default BlueImage;
