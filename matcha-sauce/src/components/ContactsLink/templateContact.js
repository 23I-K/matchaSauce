import React from "react";
import './templateContact.css';

function TemplateContact ({configContacts, src}) {
    let {number} = configContacts;

    return (
        <div className={'d-flex'}>
            <a className={'contact-link'} href={`tel:${number ? number : ''}`}><img src={src ? src : ''} alt={'logo'} className={'pe-3'}/>{number ? number : ''}</a>
        </div>
    );
}

export default TemplateContact;