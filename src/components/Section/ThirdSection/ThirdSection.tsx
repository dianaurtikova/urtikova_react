import Sec3Fon from '../../../assets/img/Sec3Fon.svg'
import Sec3TG from '../../../assets/img/Sec3TG.svg'
import Sec3WU from '../../../assets/img/Sec3WU.svg'
import '../../../assets/styles/ThirdSecond.css'

function ThirdSection (){
    return(
         <section className="section3">
            <div className="phoneFon1">
                <div className="phoneFon2">
                    <img src={Sec3Fon} className="phoneFon2_1"/>
                </div>
                <div className="phoneFon2_2">
                    <img src={Sec3TG} className="telega"/>
                    <img src={Sec3WU} className="watsUp"/>
                    <p className="phoneFonText1">Makes video calls with Messenger and WhatsApp</p>
                    <div className="phoneFonText2"><p>Easily video call with friends and family on their smartphones and tablets, even if they don’t have Portal.</p></div>
                    <p className="phoneFonText3">“Hey Portal” voice command availability varies. Learn more. Requires Messenger or WhatsApp account. WhatsApp is not available on tablets.</p>
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;