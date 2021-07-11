import React from 'react';
import './canAddItem.css'

export default function CanAddItem({description, imageSrc}) {
    return (
        <div className={'canAddItem-main-container'}>
            <img alt={'canAddItemImage'} src={imageSrc ? imageSrc : ''}/>
            <p>{description}</p>
        </div>
    )
}