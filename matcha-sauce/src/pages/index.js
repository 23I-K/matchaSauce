import React from 'react'
import '../assets/css/pagesCss/indexPage.css';
import Section1 from "../components/Section1/section1";
import Section2 from "../components/Section2/section2";
import Section3 from "../components/Section3/section3";
import DeliverySection from "../components/deliverySection/deliverySection";
import ContactsSection from "../components/ContactsSection/contactsSection";
import Footer from "../components/Footer/footer";

export default () => (
  <div className={'common-main-page-container'}>
    <Section1/>
    <Section2/>
    <Section3/>
    <DeliverySection/>
    <ContactsSection/>
  </div>
)
