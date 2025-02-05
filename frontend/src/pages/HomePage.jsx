import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Auth/useAuth';

import AboutUs from "../components/AboutUs";
import BeachImage from "../components/BeachImage";
import BlueImage from "../components/BlueImage";
import DreamPlace from "../components/DreamPlace";
import EasySet24Apps from "../components/EasySet24Apps";
import Footer from "../components/Footer";
import FourImages from "../components/FourImages";
import MakeComparison from "../components/MakeComparison";
import PaySocial from "../components/PaySocial";
import PrivateNavbar from "../components/PrivateNavbar";
import Profiles from "../components/Profiles";
import SearchTabs from "../components/SearchTabs";
import SpecialOffers from "../components/SpecialOffers";
import Tabs from "../components/Tabs";
import LazyLoadComponent from '../components/LazyLoadComponent';

const HomePage = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const [isSpecialOffersVisible, setSpecialOffersVisible] = useState(false);
    const [isMakeComparisonVisible, setMakeComparisonVisible] = useState(false);
    const [isFourImagesVisible, setFourImagesVisible] = useState(false);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div>
            <PrivateNavbar />
            <Tabs />
            <DreamPlace />
            <SearchTabs />
            <BeachImage />
            <BlueImage />
            <LazyLoadComponent onIntersect={() => setSpecialOffersVisible(true)}>
                {isSpecialOffersVisible && <SpecialOffers />}
            </LazyLoadComponent>
            <LazyLoadComponent onIntersect={() => setMakeComparisonVisible(true)}>
                {isMakeComparisonVisible && <MakeComparison />}
            </LazyLoadComponent>
            <Profiles />
            <LazyLoadComponent onIntersect={() => setFourImagesVisible(true)}>
                {isFourImagesVisible && <FourImages />}
            </LazyLoadComponent>
            <EasySet24Apps />
            <hr />
            <AboutUs />
            <PaySocial />
            <Footer />
        </div>
    );
};

export default HomePage;
