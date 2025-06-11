import Sec5Fon from '../../../assets/img/Sec5Fon.svg'
import Sec5Pic1 from '../../../assets/img/Sec5Pic1.svg'
import '../../../assets/styles/FiveSection.css'
function FiveSection (){
    return (
         <section className="section5">
            <div className="section5Text">
                <img src={Sec5Pic1} className="section5picture1"/>
                <p className="section5Text1_1"><b>Alexa Built-in</b></p>
                <p className="section5Text1_2">Portal comes with Alexa Built-in, so you can see and do <br/> more. Use your voice to control your smart home and <br/> check who’s at the front door, listen to your favorite <br/> music, watch the news and more, hands-free. Just ask.</p>
                <button className="section5But">Learn More</button>
            </div>
            <div className="section5Text2">
                <img src={Sec5Fon} className="section5picture2"/>
                <p className="section5Text2_1">Amazon, Alexa and all related logos are trademarks of Amazon.com, Inc. or its affiliate. <br/>Additional account registration, terms and fees may apply. Features may vary by location.</p>
            </div>
        </section>
    );
}

export default FiveSection;