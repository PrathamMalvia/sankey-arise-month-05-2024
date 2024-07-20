import BeachImage from "../components/BeachImage"
import BlueImage from "../components/BlueImage"
import DreamPlace from "../components/DreamPlace"
import FourImages from "../components/FourImages"
import MakeComparison from "../components/MakeComparison"
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

            <div className="bg-black text-white my-20">
                Temp
            </div>
        </div>
    )
}

export default HomePage