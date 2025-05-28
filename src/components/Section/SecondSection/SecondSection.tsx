import Sec2Fon1 from '../../../assets/img/Sec2Fon1.svg'
import Sec2Fon2 from '../../../assets/img/Sec2Fon2.svg'
import Sec2Card1 from '../../../assets/img/Sec2Card1.svg'
import Sec2Card2 from '../../../assets/img/Sec2Card2.svg'
import Sec2Card3 from '../../../assets/img/Sec2Card3.svg'
import Sec2Card4 from '../../../assets/img/Sec2Card4.svg'
import '../../../assets/styles/SecondSection.css'

function SecondSection(){
    return(
        <section className="section2">
            <div className="card-container1" id="information-cards">
                <div className="card">
                 <img src={Sec2Card1} className="card1"/>
                 <div className="cardText">
                    <h3 ><b>Portal TV</b></h3>
                    <p>Smart video calling on the biggest screen in your home</p>
                    <p>Learn More</p>
                 </div>
                </div>
                <div className="card">
                 <img src={Sec2Card2} className="card1"/>
                 <div className="cardText">
                    <h3><b>Portal</b></h3>
                    <p>Smart video calling on a 10” HD display</p>
                    <p>Learn More</p>
                 </div>
                </div>
                <div className="card">
                 <img src={Sec2Card3} className="card1"/>
                 <div className="cardText">
                    <h3><b>Portal+</b></h3>
                    <p>Smart video calling on a 15.6” HD display</p>
                    <p>Learn More</p>
                 </div>
                </div>
                <div className="card">
                 <img src={Sec2Card4} className="card1"/>
                 <div className="cardText">
                    <h3><b>Portal Mini</b></h3>
                    <p>Smart video calling on an 8” HD display</p>
                    <p>Learn More</p>
                 </div>
                </div> 
            </div>
            <p className="textSection2"><b>Smart Camera keeps every conversation front and center</b></p>
            <div className="bluefon2">
                <img src={Sec2Fon1} className="fon2"/>
                <img src={Sec2Fon2} className="blueFon"/>
            </div>
            <div className="stolbcu">
                <div className="stolbec1">
                 <p className="stolbec1_1"><b>Keeps up with the action</b></p>
                 <p className="stolbec1_2">Smart Camera automatically pans and zooms <br/> to keep up with the action. Move and talk freely <br/> and always stay in frame.</p>
                 <a href="#">Learn More</a>   
                </div>
                <div className="stolbec2">
                    <p className="stolbec2_1"><b>Keeps everyone in view</b></p>
                    <p className="stolbec2_2">As more people enter a room, Smart Camera <br/>automatically widens to keep everyone in view, <br/> so you don’t miss a moment.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;