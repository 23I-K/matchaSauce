import React, {useState} from 'react'
import {Link} from "../Router";
import './header.css'
import Logo from "../Logo/logo";
import TemplateContact from "../ContactsLink/templateContact";
import siteConfig from '../../siteConfig.json';
import phoneCall from '../../assets/img/phone-call.png';
import menuBurger from '../../assets/img/header/menu-burger.svg';
import closeMenuBurger from '../../assets/img/header/close-menu.svg';

function Header () {
    let {configContacts} = siteConfig;
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className={'header-common-container pt-4'}>
            <Logo/>
            <div className={'header-links-container'}>
                <Link to="/">Купить</Link>
                <Link to="/about">О продукте</Link>
                <Link to="/">Доставка</Link>
                <Link to="/dynamic">Контакты</Link>
            </div>
            <TemplateContact configContacts={configContacts} src={phoneCall}/>
            <div className={'menu-burger-button'} onClick={() => {setShowMenu(!showMenu)}}>
                <img src={menuBurger} alt={'menu burger'}/>
            </div>
            {showMenu &&
                <div className={'header-mobile-menu'}>
                    <div className={'header-links-container'}>
                        <Link to="/">Купить</Link>
                        <Link to="/about">О продукте</Link>
                        <Link to="/">Доставка</Link>
                        <Link to="/dynamic">Контакты</Link>
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