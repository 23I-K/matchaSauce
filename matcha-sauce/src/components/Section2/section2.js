import React from 'react'
import './section2.css';
import productImage1 from '../../assets/img/section2/product1.png';
import productImage1Mobile from '../../assets/img/section2/product1-mobile.png';
import productImage1Tablet from '../../assets/img/section2/product1Tablet.png';
import productImage2 from '../../assets/img/section2/product2.png';
import productImage2Mobile from '../../assets/img/section2/product2Mobile.png';
import productImage2Tablet from '../../assets/img/section2/product2Tablet.png';

export default function Section2() {

    return (
        <div className={'section-2-content'}>
            <h2 className={'section2-main-title'}><a name={'about-section'} className={'anchor-links'}></a>Все легче, чем кажется</h2>
            <h4 className={'section2-secondary-title px-3 my-4 my-sm-5'}>
                Нет необходимости заваривать или контролировать температуру. Не нужен специальный инвентарь или обучение персонала.
                Просто растворите соус и откройте невероятные возможности при минимальные затратах для расширения меню!
            </h4>
            <div className={'section2-description-common-container'}>
                <div className={'d-flex flex-column justify-content-between'}>
                    <div className={'section-2-description-container px-2 px-sm-4 py-4'}>
                        <p className={'section-2-title'}>Почему соус, а не классическая сухая матча?</p>
                        <p className={'section-2-description'}>
                            Заваривание матчи - деликатный и требующий времени и опыта процесс, который мы взяли на себя.
                            Просто смешайте соус с молоком для получения превосходного латте, добавьте к мороженному или в крем.
                            Простое решение и всегда великолепный результат.
                        </p>
                    </div>
                    <div className={'product-image-container product-2 mt-0 mt-md-4'}>
                        <img alt={'ProductImage'} src={productImage2} className={'w-100 productImage2'}/>
                        <img alt={'ProductImage'} src={productImage2Mobile} className={'w-100 productImage2Mobile'}/>
                        <img alt={'ProductImage'} src={productImage2Tablet} className={'w-100 productImage2Tablet'}/>
                    </div>
                </div>
                <div className={'d-flex justify-content-between section2-image-text-container'}>
                    <div className={'product-image-container product-1'}>
                        <img alt={'ProductImage'} src={productImage1} className={'w-100 productImage1'}/>
                        <img alt={'ProductImage'} src={productImage1Mobile} className={'w-100 productImage1Mobile'}/>
                        <img alt={'ProductImage'} src={productImage1Tablet} className={'w-100 productImage1Tablet'}/>
                    </div>
                    <div className={'section-2-description-container-2 px-2 px-sm-4 py-4'}>
                        <p className={'section-2-title'}>В чем уникальность?</p>
                        <p className={'section-2-description'}>
                            Мы создали идеальный вкусоароматический профиль матчи и придали ему максимально удобную для работы форму.
                            Многоступенчатая технология производства и натуральные ингредиенты позволяют нам добиться потрясающего цвета, текстуры и аромата.
                            По результатам многочисленных дегустаций мы получили 100% положительной обратной связи.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

