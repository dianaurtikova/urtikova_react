import  {ReactNode} from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
interface Layoutprops{
    children: ReactNode;
}
function Layout({children}:Layoutprops){
    return(
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    );
}

export default Layout;