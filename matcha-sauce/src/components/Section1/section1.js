import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import mainTitleImg from '../../assets/img/section1/mainTitleImg.png';
import mainTitleImgOpacity from '../../assets/img/section1/mainTitleImgOpacity.png';
import section1Check from '../../assets/img/section1/Section1_check.png';
import './section1.css';
import SwiperCore, {Autoplay, Navigation} from "swiper";

export default function Section1() {
    SwiperCore.use([Autoplay, Navigation]);
    return (
        <div className={'d-flex flex-column common-main-offer-container'}>
            <div className={'common-offer-image-container'}>
                    <div className={'offer-text-container d-flex flex-column justify-content-center'}>
                        <div>
                            <h4 className={'offer-subtitle mb-3 mb-md-0'}>GREEN TEA</h4>
                            <h1 className={'offer-title'}>Matcha sauce</h1>
                        </div>
                        <div>
                            <p className={'offer-description'}>
                                Великолепный десертный соус на основе зеленого чая матча, позволяющий передать напитку или десерту всю полноту вкуса  характер и пользу японского чая.
                            </p>
                        </div>
                        <button className={'main-btn-orange'}>Сделать заказ</button>
                    </div>
                    <div className={'offer-image-container'}>
                        <img className={'offer-image'} alt={'offer-image'} src={mainTitleImg}/>
                        <img className={'offer-image-opacity'} alt={'offer-image'} src={mainTitleImgOpacity}/>
                    </div>
                </div>
            <div className={'common-feature-container'}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            "delay": 1500,
                            "disableOnInteraction": false
                        }}
                        className={'slider-common-container'}
                    >
                        <SwiperSlide>
                            <div className={'swiper-features-container'}>
                                <p className={'features-title'}>Фасовка с удобным дозатором</p>
                                <img alt={'featuresImages'} src={section1Check} className={'features-image'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={'swiper-features-container'}>
                                <p className={'features-title'}>Доставка транспортными компаниями по всей территории РФ</p>
                                <img alt={'featuresImages'} src={section1Check} className={'features-image'}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={'swiper-features-container'}>
                                <p className={'features-title'}>Система менеджмента безопасности пищевой продукции</p>
                                <img alt={'featuresImages'} src={section1Check} className={'features-image'}/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className={'features-container'}>
                        <p className={'features-title'}>Фасовка с удобным дозатором</p>
                        <img alt={'featuresImages'} src={section1Check} className={'features-image'}/>
                    </div>
                    <div className={'features-container'}>
                        <p className={'features-title'}>Доставка транспортными компаниями по всей территории РФ</p>
                        <img alt={'featuresImages'} src={section1Check} className={'features-image'}/>
                    </div>
                    <div className={'features-container'}>
                        <p className={'features-title'}>Система менеджмента безопасности пищевой продукции</p>
                        <img alt={'featuresImages'} src={section1Check} className={'features-image'}/>
                    </div>
                </div>
        </div>
    )
}

