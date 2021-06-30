import React from 'react';
import './deliveryItem.css'

export default function DeliveryItem({mainDescription, secondaryDescription, imageSrc}) {
    return (
        <div className={'deliveryItem-container'}>
            <img alt={'canAddItemImage'} src={imageSrc ? imageSrc : ''}/>
            <p className={'main-description my-4'}>{mainDescription}</p>
            <p className={'text-center secondary-description'}>{secondaryDescription}</p>
        </div>
    )
}