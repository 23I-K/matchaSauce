import React from 'react'
import mainTitleImg from '../../assets/img/section1/mainTitleImg.png';
import section1Check from '../../assets/img/section1/Section1_check.png';
import './section1.css';

export default function Section1() {

    return (
        <div className={'d-flex flex-column common-main-offer-container'}>
            <div className={'common-offer-image-container'}>
                    <div className={'offer-text-container d-flex flex-column justify-content-center gap-5'}>
                        <div>
                            <h4 className={'offer-subtitle mb-0'}>GREEN TEA</h4>
                            <h1 className={'offer-title'}>Matcha sauce</h1>
                        </div>
                        <div>
                            <p className={'offer-description'}>
                                Великолепный десертный соус на основе зеленого чая матча, позволяющий передать напитку или десерту всю полноту вкуса  характер и пользу японского чая.
                            </p>
                        </div>
                        <button className={'main-btn-orange'}>Сделать заказ</button>
                    </div>
                    <div className={'offer-image-container w-100'}>
                        <img className={'offer-image'} alt={'offer-image'} src={mainTitleImg}/>
                    </div>
                </div>
            <div className={'common-feature-container'}>
                    <div>
                        <p className={'features-title'}>Фасовка с удобным дозатором</p>
                        <img alt={'featuresImages'} src={section1Check} className={'features-image'}/>
                    </div>
                    <div>
                        <p className={'features-title'}>Доставка транспортными компаниями по всей территории РФ</p>
                        <img alt={'featuresImages'} src={section1Check} className={'features-image'}/>
                    </div>
                    <div>
                        <p className={'features-title'}>Система менеджмента безопасности пищевой продукции</p>
                        <img alt={'featuresImages'} src={section1Check} className={'features-image'}/>
                    </div>
                </div>
        </div>
    )
}

