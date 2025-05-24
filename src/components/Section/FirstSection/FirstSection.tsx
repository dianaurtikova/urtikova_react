import section1Fon from '../../../assets/img/section1Fon.svg'
import Sec1Pic1 from '../../../assets/img/Sec1Pic1.svg'
import Sec1Pic2 from '../../../assets/img/Sec1Pic2.svg'
import '../../../assets/styles/FirstSection.css'
function FirstSection(){
    return(
        <section className="section1">
            <img src={section1Fon} alt="фон1" className="fon1"/>
            <div className="textSection1">
                <p className="text1Fon1"><b>If you can’t be there, feel there with Portal</b></p>
                <p className ="text2Fon1"><b>Smart video calling with Alexa Built‑in.</b></p>
                <button className="button1Fon1"><b className="textButton1">Watch the Demo</b></button>
                <b className="textButton2">Compare Portals</b>
            </div>
            <div className="textSection1_1">
                <img src={Sec1Pic1} alt="фон1.2" className="fon1.2"/>
                <img src={Sec1Pic2} alt="фон1.3" className="fon1_3"/>
                <div className="textSection1_2">
                    <p className="text1Fon1_2"><b>Buy any 2 and save $50*</b></p>
                    <p className="text2Fon1_2">Ship to multiple addresses at no extra cost.</p>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;