import { useEffect, useState } from 'react'
import './App.css'
import Layout from '../src/components/Layout'
import Preloader from '../src/components/Preloader/Preloader'
import FirstSection from '../src/components/Section/FirstSection/FirstSection'
import SecondSection from '../src/components/Section/SecondSection/SecondSection'
import ThirdSection from '../src/components/Section/ThirdSection/ThirdSection'
import FourSecond from '../src/components/Section/FourSecond/FourSecond'
import FiveSecond from '../src/components/Section/FiveSection/FiveSection'
import SixSection from '../src/components/Section/SixSection/SixSection'
import SevenSection from '../src/components/Section/SevenSection/SevenSection'
import CardList from '../src/components/CardList/CardList'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);
  return (
    <>
      {isLoading ? <Preloader /> :
        <Layout>
          <FirstSection />
          <SecondSection>
            <CardList limit={4} />
          </SecondSection>
          <ThirdSection />
          <FourSecond />
          <FiveSecond />
          <SixSection />
          <SevenSection />
        </Layout>
      }
    </>
  )
}
export default App