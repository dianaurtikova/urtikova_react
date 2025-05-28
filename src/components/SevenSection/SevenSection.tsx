import Sec1Pic1 from '../../../assets/img/Sec1Pic1.svg' 


function SevenSection(){
    return(
        <section className="section7">
                    <div className="Sec7fon1">
                <div className="Sec7fon2">
                    <div className="section7Text">
                        <p className="section7Text1_1"><b>Find the Portal that’s <br/>right for you</b></p>
                        <img src={Sec1Pic1} className="fon7"/>
                        <div className="section7Text2">
                            <p className="section7Text2_1">Buy any 2 and save $50*</p>
                            <p className="section7Text2_1">Ship to multiple addresses at no extra cost.</p>
                        </div>
                    </div>
                    <div className="card-container2">
                        <div className="swiper swiper"> 
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="card2">
                                        <div className="cardPortal">
                                           <div>Portal TV</div>
                                           <div><span>$149</span></div>
                                        </div>
                                        <img src="img/portalTV.png" className="card2_1"/>
                                       <div className="card2Text">
                                        <p>Smart video calling <br> on your TV</p>
                                        <button className="BuyNow">Buy Now</button>
                                        <p><a href="#">Learn More</a></p>
                                       </div>
                                   </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card2">
                                        <div className="cardPortal">
                                            <div>Portal</div>
                                            <div><span>$179</span></div>
                                         </div>
                                        <img src="img/portal.png" className="card2_1"/>
                                        <div className="card2Text">
                                         <p>Smart video calling <br/> on a 10” HD display</p>
                                         <button className="BuyNow">Buy Now</button>
                                         <p><a href="#">Learn More</a></p>
                                        </div>
                                     </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card2">
                                        <div className="cardPortal">
                                            <div>Portal+</div>
                                            <div><span>$279</span></div>
                                         </div>
                                        <img src="img/portal+.png" className="card2_1"/>
                                        <div className="card2Text">
                                         <p>Smart video calling <br/> on a 15.6” HD display</p>
                                         <button className="BuyNow">Buy Now</button>
                                         <p><a href="#">Learn More</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card2">
                                        <div className="cardPortal">
                                            <div>Portal Mini</div>
                                            <div><span>$129</span></div>
                                         </div>
                                        <img src="img/portalMini.png" className="card2_1"/>
                                        <div className="card2Text">
                                         <p>Smart video calling <br/> on an 8” HD display</p>
                                         <button className="BuyNow">Buy Now</button>
                                         <p><a href="#">Learn More</a></p>
                                        </div>
                                    </div>
                                </div>
                               <div className="swiper-slide">
                                <div className="card2">
                                    <div className="cardPortal">
                                        <div>Portal Mini</div>
                                        <div><span>$129</span></div>
                                     </div>
                                    <img src="img/portalMini.png" className="card2_1"/>
                                    <div className="card2Text">
                                     <p>CDишки DVDишки</p>
                                     <button className="BuyNow">Buy Now</button>
                                     <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                               </div>
                               <div className="swiper-slide">
                                <div className="card2">
                                    <div className="cardPortal">
                                        <div>Portal Mini</div>
                                        <div><span>$129</span></div>
                                     </div>
                                    <img src="img/portalMini.png" className="card2_1"/>
                                    <div className="card2Text">
                                     <p>И плаазменный телевизор</p>
                                     <button className="BuyNow">Buy Now</button>
                                     <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                               </div>
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                </div>
                <button className="CPbut">Compare Products</button>
            </div>
            <img src="img/S7fon.png" className="Sec7fon"/>
        </div>
        </section>
    );
}
export default SevenSection;