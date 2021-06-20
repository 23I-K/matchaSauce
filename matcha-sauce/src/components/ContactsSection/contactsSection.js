import React from 'react';
import TemplateContact from "../ContactsLink/templateContact";
import siteConfig from '../../siteConfig.json';
import contactsPhone from '../../assets/img/contactsSection/contacts-phone.png';
import contactFormMainImg from '../../assets/img/contactsSection/contact-form-main.png';
import './contactsSection.css';

export default function ContactsSection() {
    return (
        <div>
            <h1 className={'w-100 text-center'}>Контакты</h1>
            <div className={'d-flex'}>
                <div className={'d-flex flex-column'}>
                    <div className={'d-flex flex-column'}>
                        <input placeholder={'Ваше имя'}/>
                        <input placeholder={'Ваш E-mail'}/>
                        <input placeholder={'Ваш телефон'}/>
                    </div>
                    <button>Сделать заказ</button>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Cвяжитесь с нами для уточнения подробностей</p>
                            <div className={'d-flex'}>
                                <TemplateContact configContacts={siteConfig} src={contactsPhone}/>
                                <TemplateContact configContacts={siteConfig} src={contactsPhone}/>
                                <TemplateContact configContacts={siteConfig} src={contactsPhone}/>
                                <TemplateContact configContacts={siteConfig} src={contactsPhone}/>
                            </div>
                        </div>
                        <img alt={'contactFormImage'} src={contactFormMainImg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}