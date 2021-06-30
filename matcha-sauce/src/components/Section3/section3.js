import React from 'react'
import './section3.css';
import CanAddItem from "../canAddItem/canAddItem";
import coffee1 from '../../assets/img/section3/section3_coffee_1.png';
import coffee2 from '../../assets/img/section3/section3_coffee_2.png';
import coffee3 from '../../assets/img/section3/section3_coffee_3.png';
import coffee4 from '../../assets/img/section3/section3_coffee_4.png';
import coffee5 from '../../assets/img/section3/section3_coffee_5.png';
import coffee6 from '../../assets/img/section3/section3_coffee_6.png';

export default function Section3() {

    return (
        <div className={'section3-content'}>
            <h2 className={'section3-main-title mb-5'}>Можно добавить в</h2>
            <div className={'canAddItem-common-container w-100 justify-content-between'}>
                <CanAddItem description={'Латте'} imageSrc={coffee1}/>
                <CanAddItem description={'Милкшейки'} imageSrc={coffee2} />
                <CanAddItem description={'Коктейли'} imageSrc={coffee3} />
                <CanAddItem description={'Десерты'} imageSrc={coffee4} />
                <CanAddItem description={'Каши'} imageSrc={coffee5} />
                <CanAddItem description={'Мороженое'} imageSrc={coffee6} />
            </div>
            <p className={'section3-footer-text'}>Десерты и напитки с соусом матча выйграшно смотрятся в любом ракурсе</p>
        </div>
    )
}

