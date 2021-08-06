import React, {useContext, useEffect, useRef, useState} from 'react';
import contactsPhone from '../../assets/img/contactsSection/contacts-phone.png';
import contactsTelegram from '../../assets/img/contactsSection/telegram.png';
import contactsMail from '../../assets/img/contactsSection/mail.png';
import contactsWhatsApp from '../../assets/img/contactsSection/whatsapp.png';
import contactFormMainImg from '../../assets/img/contactsSection/contact-form-main.png';
import contactFormMainImgMobile from '../../assets/img/contactsSection/contact-form-main-mobile.png';
import './ModalContactsSection.css';
import closeMenuBurger from '../../assets/img/header/close-menu.svg';
import ModalContext from "../../context";
import FormSubmitHandler from '../../handlers/FormSubmitHandler';
import PhoneInput from 'react-phone-number-input/input';

export default function ModalContactsSection() {
    const {modalContext, setModalContext} = useContext(ModalContext);
    const [mobileInputValue, setmobileInputValue] = useState();

    return (
        <>
            {modalContext &&
                <div className={'contactsSection-container modal-contacts-container'}>
                    <div className={'d-flex contact-form-container modal-contact-form-container w-75'}>
                        <div className={'close-menu-btn'} onClick={() => {setModalContext(!modalContext)}}>
                            <img src={closeMenuBurger} alt={'close menu btn'}/>
                        </div>
                        <FormSubmitHandler>
                            <form className={'d-flex flex-column form-inputs-container'}>
                                <div className={'d-flex flex-column justify-content-between form-inputs-container-inner'}>
                                    <input placeholder={'Ваше имя'} className={'contact-form-input'} type="input" name="name" required/>
                                    <input placeholder={'Ваш E-mail'} className={'contact-form-input'} type="email" name="email" required/>
                                    <PhoneInput
                                        placeholder={'Ваш телефон'}
                                        value={mobileInputValue}
                                        onChange={setmobileInputValue}
                                        defaultCountry="RU"
                                        className={'contact-form-input'}
                                        type="input" 
                                        name="phone"
                                        required
                                    />
                                </div>
                                <button className={'main-btn-orange contacts-btn'}>Сделать заказ</button>
                            </form>
                        </FormSubmitHandler>
                        <div className={'form-contacts-container-common'}>
                            <div className={'form-contacts-container modal-form-contacts-container py-4 px-4 px-sm-5'}>
                                <p className={'mb-4 form-contacts-text'}>Cвяжитесь с нами для уточнения подробностей</p>
                                <div className={'d-flex flex-column w-100 gap-4'}>
                                    <div className={'d-flex justify-content-between form-contacts-phone-container'}>
                                        <a className={'contact-link contact-link-2 gap-2'} href={'tel: +79096931604'}><img src={contactsPhone} alt={'logo'}/>{'+79096931604'}</a>
                                        <a className={'contact-link contact-link-2 gap-2'} href={'tel: +79096931604'}><img src={contactsTelegram} alt={'logo'}/>{'+79096931604'}</a>
                                    </div>
                                    <div className={'d-flex justify-content-between form-contacts-phone-container'}>
                                        <a className={'contact-link contact-link-2 gap-2'} href={'mailto: matchasauce@gmail.com'}><img src={contactsMail} alt={'logo'}/>{'matchasauce@gmail.com'}</a>
                                        <a className={'contact-link contact-link-2 gap-2'} href={'https://wa.me/+79096931604'}><img src={contactsWhatsApp} alt={'logo'}/>{'+79096931604'}</a>
                                    </div>
                                    <p className={'mb-4 form-contacts-text contacts-second-description'}>Свяжитесь с нами и мы расскажем всё о применении, предоставим бесплатные образцы, проведем презентацию, разработаем и дополним меню с применением нашего продукта</p>
                                </div>
                            </div>
                            <img alt={'contactFormImage'} src={contactFormMainImg} className={'contact-form-image'}/>
                            <img alt={'contactFormImage'} src={contactFormMainImgMobile} className={'contact-form-image-mobile modal-form-image'}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}