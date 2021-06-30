import React from 'react'
import {Link} from "../Router";
import './header.css'
import Logo from "../Logo/logo";
import TemplateContact from "../ContactsLink/templateContact";
import siteConfig from '../../siteConfig.json';
import phoneCall from '../../assets/img/phone-call.png';

function Header () {
    let {configContacts} = siteConfig;

    return (
        <nav className={'header-common-container pt-4'}>
            <Logo/>
            <div className={'header-links-container'}>
                <Link to="/">Купить</Link>
                <Link to="/about">О продукте</Link>
                <Link to="/blog">Доставка</Link>
                <Link to="/dynamic">Контакты</Link>
            </div>
            <TemplateContact configContacts={configContacts} src={phoneCall}/>
        </nav>
    )
}

export default Header;