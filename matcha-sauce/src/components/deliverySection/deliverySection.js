import React from 'react';
import DeliveryItem from "../deliveryItem/deliveryItem";
import deliveryItemImage1 from '../../assets/img/deliverySection/deliveryItemImg1.png';
import deliveryItemImage2 from '../../assets/img/deliverySection/deliveryItemImg2.png';
import deliveryItemImage3 from '../../assets/img/deliverySection/deliveryItemImg3.png';
import './deliverySection.css';

export default function DeliverySection () {
    return (
        <div className={'delivery-section-content'}>
            <h1 className={'delivery-header-text mb-5 pb-1'}>Доставка и оплата</h1>
            <div className={'deliveryItems-common-container justify-content-evenly'}>
                <DeliveryItem mainDescription={'Заказ'} secondaryDescription={'Вы оставляете свой номер и наш менеджер связывается с Вами для уточнения заказа.'} imageSrc={deliveryItemImage1}/>
                <DeliveryItem mainDescription={'Оплата'} secondaryDescription={'Выбираете способ оплаты: Переводом на карту Наличными курьеру.'} imageSrc={deliveryItemImage2}/>
                <DeliveryItem mainDescription={'Доставка'} secondaryDescription={'Доставка осуществляется СДЭК, ПЭК, Деловые Линии Так же можно забрать заказ из нашего офиса.'} imageSrc={deliveryItemImage3}/>
            </div>
        </div>
    )
}