import React from 'react';
import './deliveryItem.css'

export default function DeliveryItem({mainDescription, secondaryDescription, imageSrc}) {
    return (
        <div className={'deliveryItem-container'}>
            <img alt={'canAddItemImage'} src={imageSrc ? imageSrc : ''}/>
            <p>{mainDescription}</p>
            <p>{secondaryDescription}</p>
        </div>
    )
}