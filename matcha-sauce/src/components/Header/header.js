import React, {useContext, useState} from 'react'
import './header.css'
import Logo from "../Logo/logo";
import TemplateContact from "../ContactsLink/templateContact";
import siteConfig from '../../siteConfig.json';
import phoneCall from '../../assets/img/phone-call.png';
import menuBurger from '../../assets/img/header/menu-burger.svg';
import closeMenuBurger from '../../assets/img/header/close-menu.svg';
import {ModalContext} from "../../context";

function Header () {
    let {configContacts} = siteConfig;
    const [showMenu, setShowMenu] = useState(false);
    const [modalContext, setModalContext] = useContext(ModalContext);

    return (
        <nav className={'header-common-container pt-4'}>
            <Logo/>
            <div className={'header-links-container'}>
                <a href={'/'} onClick={() => {setModalContext(!modalContext)}}>Купить</a>
                <a href="#about-section">О продукте</a>
                <a href="#delivery-section">Доставка</a>
                <a href="#contacts-section">Контакты</a>
            </div>
            <TemplateContact configContacts={configContacts} src={phoneCall}/>
            <div className={'menu-burger-button'} onClick={() => {setShowMenu(!showMenu)}}>
                <img src={menuBurger} alt={'menu burger'}/>
            </div>
            {showMenu &&
                <div className={'header-mobile-menu'}>
                    <div className={'header-links-container'}>
                        <a href={'/'}>Купить</a>
                        <a href="#about-section">О продукте</a>
                        <a href="#delivery-section">Доставка</a>
                        <a href="#contacts-section">Контакты</a>
                    </div>
                    <div className={'close-menu-btn'} onClick={() => {setShowMenu(!showMenu)}}>
                        <img src={closeMenuBurger} alt={'close menu btn'}/>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Header;