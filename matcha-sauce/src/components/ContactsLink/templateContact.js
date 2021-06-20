import React from "react";

function TemplateContact ({configContacts, src}) {
    let {number} = configContacts;

    return (
        <div>
            <a className={'contact-link'} href={`tel:${number ? number : ''}`}><img src={src ? src : ''} alt={'logo'}/>{number ? number : ''}</a>
        </div>
    );
}

export default TemplateContact;