import React from "react";
import './footer.css';
import {Link} from "../Router";

export default function Footer() {
    return (
        <div style={{height: '200px', width: '100%', backgroundColor: 'orange'}}>
            <div className={'container d-flex'}>
                <Link to={'/'} className={'footer-logo-link'}>
                    <p>FoodWay</p>
                </Link>
                <p>Политика конфиденциальности</p>
                <p>Все права защищены</p>
                <p>ООО “ФУД ВЕЙ” ОГРН 1217700196427 ИНН 7751196631</p>
            </div>
        </div>
    )
}