import Sec6Fon from  '../../../assets/img/Sex6Fon.svg'
import Sec6Pic1 from '../../../assets/img/Sec6Pic1.svg'
import Sec6Pic2 from '../../../assets/img/Sec6Pic2.svg'
import '../../../assets/styles/SixSection.css'
function SixSection(){
    return(
         <section className="section6">
            <div className="section6Foto">
                <div className="section6Foto1">
                    <div className="section6Text1">
                        <p className="section6Text1_1"><b>Private by design</b></p>
                        <p className="section6Text1_2">Easily disable the camera and the microphone, or block the lens <br/>with the camera cover. And all Portal video calls are encrypted.</p>
                        <a href="#">Learn More</a>
                    </div>
                    <img src={Sec6Pic1} className="s4"/>
                </div>
                <div className="section6Foto2">
                    <div className="section6Text2">
                        <p className="section6Text2_1"><b>Work smarter from home</b></p>
                        <p className="section6Text2_2">Whether you and your co-workers use Workplace, BlueJeans, <br/> GoToMeeting, Webex or Zoom, Portal’s got the tools to keep <br/>you productive while working from home.</p>
                        <a href="#">Learn More</a>
                    </div>
                    <img src={Sec6Pic2} className="s4"/>
                </div>
            </div>
            <img src={Sec6Fon} className="blueFonS4"/>
        </section>
    );
}

export default SixSection;