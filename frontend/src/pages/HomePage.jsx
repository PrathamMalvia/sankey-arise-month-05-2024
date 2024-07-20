import DreamPlace from "../components/DreamPlace"
import PrivateNavbar from "../components/PrivateNavbar"
import SearchTabs from "../components/SearchTabs"
import Tabs from "../components/Tabs"

const HomePage = () => {
    return (
        <>
            <PrivateNavbar />
            <Tabs />
            <DreamPlace />
            <SearchTabs />
        </>
    )
}

export default HomePage