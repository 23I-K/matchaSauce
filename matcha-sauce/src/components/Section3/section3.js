import React from 'react'
import './section3.css';
import CanAddItem from "../canAddItem/canAddItem";
import coffee1 from '../../assets/img/section3/section3_coffee_1.png';

export default function Section3() {

    return (
        <div>
            <h2 className={'section3-main-title'}>Можно добавить в</h2>
            <div className={'canAddItem-common-container'}>
                <CanAddItem description={'Латте'} imageSrc={coffee1}/>
                <CanAddItem description={'Милкшейки'} imageSrc={coffee1} />
                <CanAddItem description={'Коктейли'} imageSrc={coffee1} />
                <CanAddItem description={'Десерты'} imageSrc={coffee1} />
                <CanAddItem description={'Каши'} imageSrc={coffee1} />
                <CanAddItem description={'Мороженое'} imageSrc={coffee1} />
            </div>
            <p>Десерты и напитки с соусом матча выйграшно смотрятся в любом ракурсе</p>
        </div>
    )
}

