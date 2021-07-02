import React from 'react';
import contactsPhone from '../../assets/img/contactsSection/contacts-phone.png';
import contactsTelegram from '../../assets/img/contactsSection/telegram.png';
import contactsMail from '../../assets/img/contactsSection/mail.png';
import contactsWhatsApp from '../../assets/img/contactsSection/whatsapp.png';
import contactFormMainImg from '../../assets/img/contactsSection/contact-form-main.png';
import contactFormMainImgMobile from '../../assets/img/contactsSection/contact-form-main-mobile.png';
import './contactsSection.css';

export default function ContactsSection() {
    return (
        <div className={'contactsSection-container'}>
            <h1 className={'w-100 text-center mb-5'}>Контакты</h1>
            <div className={'d-flex contact-form-container'}>
                <div className={'d-flex flex-column form-inputs-container'}>
                    <div className={'d-flex flex-column justify-content-between form-inputs-container-inner'}>
                        <input placeholder={'Ваше имя'} className={'contact-form-input'}/>
                        <input placeholder={'Ваш E-mail'} className={'contact-form-input'}/>
                        <input placeholder={'Ваш телефон'} className={'contact-form-input'}/>
                    </div>
                    <button className={'main-btn-orange contacts-btn'}>Сделать заказ</button>
                </div>
                <div className={'form-contacts-container-common'}>
                    <div className={'form-contacts-container py-4 px-4 px-sm-5'}>
                        <p className={'mb-4 form-contacts-text'}>Cвяжитесь с нами для уточнения подробностей</p>
                        <div className={'d-flex flex-column w-100 gap-4'}>
                            <div className={'d-flex justify-content-between form-contacts-phone-container'}>
                                <a className={'contact-link contact-link-2 gap-2'} href={'tel: +79096931604'}><img src={contactsPhone} alt={'logo'}/>{'+79096931604'}</a>
                                <a className={'contact-link contact-link-2 gap-2'} href={'tel: +79096931604'}><img src={contactsTelegram} alt={'logo'}/>{'+79096931604'}</a>
                            </div>
                            <div className={'d-flex justify-content-between form-contacts-phone-container'}>
                                <a className={'contact-link contact-link-2 gap-2'} href={'mailto: matchasauce@gmail.com'}><img src={contactsMail} alt={'logo'}/>{'matchasauce@gmail.com'}</a>
                                <a className={'contact-link contact-link-2 gap-2'} href={'tel: +79096931604'}><img src={contactsWhatsApp} alt={'logo'}/>{'+79096931604'}</a>
                            </div>
                        </div>
                    </div>
                    <img alt={'contactFormImage'} src={contactFormMainImg} className={'contact-form-image'}/>
                    <img alt={'contactFormImage'} src={contactFormMainImgMobile} className={'contact-form-image-mobile'}/>
                </div>
            </div>
        </div>
    )
}