import { useState } from 'react'
import logoHeader from '../../assets/img/logotipHeader.svg'
import Form from '../Form/Form'
import '../../assets/styles/Header.css'

function Header() {
    const [open, setOpen] = useState(false);
    const clickOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <header className="header">
                <div className="logotip">
                    <img src={logoHeader} alt="логотип" className="logo" />
                </div>
                <div className="navigation">
                    <nav className="headerNavigator">
                        <ul>
                            <li ><a href="#" className="butt">Products</a></li>
                            <li ><a href="#" className="butt">Features</a></li>
                            <li ><a href="#" className="butt">Support</a></li>
                        </ul>
                    </nav>
                    <button className="but" onClick={clickOpen}>Log Into</button>
                </div>
            </header>
             <Form active={open} setActive={setOpen} />
        </>
    );
}

export default Header;