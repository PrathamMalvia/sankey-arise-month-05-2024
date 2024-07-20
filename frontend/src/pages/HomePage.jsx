import AboutUs from "../components/AboutUs"
import BeachImage from "../components/BeachImage"
import BlueImage from "../components/BlueImage"
import DreamPlace from "../components/DreamPlace"
import EasySet24Apps from "../components/EasySet24Apps"
import Footer from "../components/Footer"
import FourImages from "../components/FourImages"
import MakeComparison from "../components/MakeComparison"
import PaySocial from "../components/PaySocial"
import PrivateNavbar from "../components/PrivateNavbar"
import Profiles from "../components/Profiles"
import SearchTabs from "../components/SearchTabs"
import SpecialOffers from "../components/SpecialOffers"
import Tabs from "../components/Tabs"

const HomePage = () => {
    return (
        <div className="h-auto">
            <PrivateNavbar />
            <Tabs />
            <DreamPlace />
            <SearchTabs />
            <BeachImage />
            <BlueImage />
            <SpecialOffers />
            <MakeComparison />
            <Profiles />
            <FourImages />
            <EasySet24Apps />
            <hr />
            <AboutUs />
            <PaySocial />
            <Footer />
        </div>
    )
}

export default HomePage