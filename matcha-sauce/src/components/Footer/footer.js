import React from "react";
import './footer.css';
import {Link} from "../Router";
import Logo from "../Logo/logo";

export default function Footer() {
    return (
        <div className={'footer-main-container'}>
            <div className={'container d-flex w-75 gap-5 align-items-center'}>
                <Logo/>
                <p className={'footer-text'}>Политика конфиденциальности</p>
                <p className={'footer-text'}>Все права защищены</p>
                <div className={'footer-company-info-container'}>
                    <p>ООО “ФУД ВЕЙ”</p>
                    <p>ОГРН 1217700196427</p>
                    <p>ИНН 7751196631</p>
                </div>
            </div>
        </div>
    )
}