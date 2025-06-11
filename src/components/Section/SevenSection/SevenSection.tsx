import Sec1Pic1 from '../../../assets/img/Sec1Pic1.svg';
import Sec7Card1 from '../../../assets/img/Sec7Card1.svg';
import Sec7Card2 from '../../../assets/img/Sec7Card2.svg';
import Sec7Card3 from '../../../assets/img/Sec7Card3.svg';
import Sec7Card4 from '../../../assets/img/Sec7Card4.svg';
import Sec7fon from '../../../assets/img/Sec7fon.svg';
import '../../../assets/styles/SevenSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

function SevenSection() {
    return (
        <section className="section7">
            <div className="Sec7fon1">
                <div className="Sec7fon2">
                    <div className="section7Text">
                        <p className="section7Text1_1"><b>Find the Portal that’s <br />right for you</b></p>
                        <img src={Sec1Pic1} className="fon7" alt="Decoration" />
                        <div className="section7Text2">
                            <p className="section7Text2_1">Buy any 2 and save $50*</p>
                            <p className="section7Text2_1">Ship to multiple addresses at no extra cost.</p>
                        </div>
                    </div>

                    <div className="card-container2">
                        <Swiper
                            modules={[Navigation]}
                            loop={true}
                            slidesPerView={4}
                            slidesPerGroup={1}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                        >
                            <SwiperSlide>
                                <div className="card2">
                                    <div className="cardPortal">
                                        <div>Portal TV</div>
                                        <div><span>$149</span></div>
                                    </div>
                                    <img src={Sec7Card1} className="card2_1" alt="Portal TV" />
                                    <div className="card2Text">
                                        <p>Smart video calling <br /> on your TV</p>
                                        <button className="BuyNow">Buy Now</button>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card2">
                                    <div className="cardPortal">
                                        <div>Portal</div>
                                        <div><span>$179</span></div>
                                    </div>
                                    <img src={Sec7Card2} className="card2_1" alt="Portal" />
                                    <div className="card2Text">
                                        <p>Smart video calling <br /> on a 10” HD display</p>
                                        <button className="BuyNow">Buy Now</button>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card2">
                                    <div className="cardPortal">
                                        <div>Portal+</div>
                                        <div><span>$279</span></div>
                                    </div>
                                    <img src={Sec7Card3} className="card2_1" alt="Portal+" />
                                    <div className="card2Text">
                                        <p>Smart video calling <br /> on a 15.6” HD display</p>
                                        <button className="BuyNow">Buy Now</button>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card2">
                                    <div className="cardPortal">
                                        <div>Portal Mini</div>
                                        <div><span>$129</span></div>
                                    </div>
                                    <img src={Sec7Card4} className="card2_1" alt="Portal Mini" />
                                    <div className="card2Text">
                                        <p>Smart video calling <br /> on an 8” HD display</p>
                                        <button className="BuyNow">Buy Now</button>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card2">
                                    <div className="cardPortal">
                                        <div>Portal Mini</div>
                                        <div><span>$129</span></div>
                                    </div>
                                    <img src={Sec7Card4} className="card2_1" alt="Portal Mini" />
                                    <div className="card2Text">
                                        <p>CDишки DVDишки</p>
                                        <button className="BuyNow">Buy Now</button>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card2">
                                    <div className="cardPortal">
                                        <div>Portal Mini</div>
                                        <div><span>$129</span></div>
                                    </div>
                                    <img src={Sec7Card4} className="card2_1" alt="Portal Mini" />
                                    <div className="card2Text">
                                        <p>И плаазменный телевизор</p>
                                        <button className="BuyNow">Buy Now</button>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    <button className="CPbut">Compare Products</button>
                </div>
                <img src={Sec7fon} className="Sec7fon" alt="Background" />
            </div>
        </section>
    );
}

export default SevenSection;