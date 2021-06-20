import React from 'react'
import mainTitleImg from '../../assets/img/section1/mainTitleImg.png';
import section1Check from '../../assets/img/section1/Section1_check.png';
import './section1.css';

export default function Section1() {

    return (
        <div>
                <div className={'common-offer-image-container'}>
                    <div className={'offer-text-container'}>
                        <div>
                            <h4>GREEN TEA</h4>
                            <h1>Matcha sauce</h1>
                        </div>
                        <div>
                            <p>
                                Великолепный десертный соус на основе зеленого чая матча, позволяющий передать напитку или десерту всю полноту вкуса  характер и пользу японского чая.
                            </p>
                        </div>
                        <button>Сделать заказ</button>
                    </div>
                    <div className={'offer-image-container'}>
                        <img className={'offer-image'} alt={'offer-image'} src={mainTitleImg}/>
                    </div>
                </div>
                <div className={'common-feature-container'}>
                    <div>
                        <p>Фасовка с удобным дозатором</p>
                        <img alt={'featuresImages'} src={section1Check}/>
                    </div>
                    <div>
                        <p>Фасовка с удобным дозатором</p>
                        <img alt={'featuresImages'} src={section1Check}/>
                    </div>
                    <div>
                        <p>Фасовка с удобным дозатором</p>
                        <img alt={'featuresImages'} src={section1Check}/>
                    </div>
                </div>
            </div>
    )
}

