import profileBg from '../images/profileBg.jpeg';
import profile1 from '../images/profile1.jpeg';
import profile2 from '../images/profile2.jpeg';
import profile3 from '../images/profile3.jpeg';
import flag1 from '../assets3/flag1.svg';
import flag2 from '../assets3/flag2.svg';
import flag3 from '../assets3/flag3.svg';

const Profiles = () => {
    const profiles = [
        { name: 'Teacher Terece', flag: flag1, image: profile1, comment: 'Returning to this hotel is always a delight -- their loyalty program showers us with exclusive discounts and amazing perks!' },
        { name: 'BEYU68£', flag: flag2, image: profile2, comment: 'Accessing EasySet24 extraordinary special offers makes always our journey even more unforgettable.' },
        { name: 'Elina13ay', flag: flag3, image: profile3, comment: 'Weekends here are pure bliss with their crafted packages, and extended stay discounts make relaxation more enticing.' },
    ];

    return (
        <section className="relative w-full h-[40rem] overflow-hidden">
            <img src={profileBg} alt="Scenic travel background" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-2/3 flex flex-col lg:flex-row justify-between items-center p-4">
                {profiles.map((profile, index) => (
                    <article key={index} className="relative bg-black bg-opacity-40 rounded-lg p-4 mb-4 lg:mb-0 w-full lg:w-[30%] mx-2">
                        <img src={profile.image} alt={`${profile.name}'s profile`} className="absolute top-[-25%] left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full" loading="lazy" />
                        <div className="mt-12 flex items-center justify-center mb-2">
                            <img src={profile.flag} alt={`${profile.name}'s country flag`} className="w-6 h-6 mr-2" loading="lazy" />
                            <h3 className="text-white font-semibold">{profile.name}</h3>
                        </div>
                        <p className="text-white text-sm text-center">{profile.comment}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Profiles;