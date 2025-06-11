import { useEffect, useState } from 'react'
import './App.css'
import Layout from '../src/components/Layout'
import Preloader from '../src/components/Preloader/Preloader'

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
          
        </Layout>
      }
    </>
  )
}
export default App