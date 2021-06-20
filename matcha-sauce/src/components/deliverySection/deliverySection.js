import React from 'react';
import DeliveryItem from "../deliveryItem/deliveryItem";
import deliveryItemImage1 from '../../assets/img/deliverySection/deliveryItemImg1.png';
import './deliverySection.css';

export default function DeliverySection () {
    return (
        <div>
            <h1>Доставка и оплата</h1>
            <div className={'deliveryItems-common-container'}>
                <DeliveryItem mainDescription={'Заказ'} secondaryDescription={'Вы оставляете свой номер и наш менеджер связывается с Вами для уточнения заказа.'} imageSrc={deliveryItemImage1}/>
                <DeliveryItem mainDescription={'Оплата'} secondaryDescription={'Выбираете способ оплаты: Переводом на карту Наличными курьеру.'} imageSrc={deliveryItemImage1}/>
                <DeliveryItem mainDescription={'Доставка'} secondaryDescription={'Доставка осуществляется СДЭК, ПЭК, Деловые Линии Так же можно забрать заказ из нашего офиса.'} imageSrc={deliveryItemImage1}/>
            </div>
        </div>
    )
}