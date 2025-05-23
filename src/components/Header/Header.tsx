import logoHeader from '../../assets/img/logotipHeader.svg'
import '../../assets/styles/Header.css'
function Header(){
    return(
         <header className ="header">
        <div className="logotip">
            <img src={logoHeader} alt="логотип" className="logo"/>
        </div>
        <div className="navigation">
            <nav className="headerNavigator">
                <ul>
                    <li ><a href="#" className="butt">Products</a></li>
                    <li ><a href="#" className="butt">Features</a></li>
                    <li ><a href="#" className="butt">Support</a></li>
                </ul>
            </nav>
            <button className="but" /*onClick="openBackdrop()"*/><a className="headerButton" href="#">Log Into</a></button>
        </div>
    </header>
    );
}

export default Header;