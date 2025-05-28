import '../../../assets/styles/FourSecind.css'
import Sec4Fon from '../../../assets/img/Sec4Fon.svg'
function FourSecond(){
    return (
        <section className="section4">
            <img src={Sec4Fon} className="tvFon"/>
            <div className="slayder">
                <div className="slayder1">
                    <p className="slayderText1"><b>Don’t just read the <br/> story. Be the story.</b></p>
                    <p className="slayderText2">With Story Time you can bring your children’s favorite <br/> stories to life with music, animation and AR effects.</p>
                    <p className="slayderText3">Discover</p>
                </div>
                <div className="slayder2">
                    <p><b>Put a smile on your face with AR masks.</b></p>
                    <p><b>A photo frame that’s picture-perfect</b></p>
                </div>
            </div>
        </section>
    );
}

export default FourSecond;