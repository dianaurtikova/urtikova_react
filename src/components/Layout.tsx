import Header from '../components/Header/Header'
import FirstSection from '../components/Section/FirstSection/FirstSection'
import SecondSection from '../components/Section/SecondSection/SecondSection'
import ThirdSection from '../components/Section/ThirdSection/ThirdSection'
import FourSecond from '../components/Section/FourSecond/FourSecond'
import FiveSecond from '../components/Section/FiveSection/FiveSection'
import SixSection from '../components/Section/SixSection/SixSection'
import SevenSection from '../components/Section/SevenSection/SevenSection'
import Footer from '../components/Footer/Footer'
function Layout(){
    return(
        <>
        <Header />
        <FirstSection />
        <SecondSection/>
        <ThirdSection/>
        <FourSecond/>
        <FiveSecond/>
        <SixSection/>
        <SevenSection/>
        <Footer/>
        </>
    );
}

export default Layout;