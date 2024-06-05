import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react' 



const SecurityGuardInCalifornia = () => {

  const renderHead = () => {
    return <Head>
    <title>Security Guard Company in Arlington | Joint Power Security Services Inc.</title>
    <meta name="description" content="Hire professional security guards in Arlington with Joint Power Security Services Inc. We offer reliable and affordable security solutions for businesses, events, and personal needs across all major cities in Texas." />
    <meta name="keywords" content="security guard services Arlington, security company in Arlington, hire security guards Arlington, fire watch services Arlington, event security Arlington, VIP protection Arlington, mobile patrols Arlington, access management Arlington, commercial security Arlington, construction site security Arlington, emergency security Arlington, homeless security Arlington, hospital security Arlington, security company near me, security in Grand Prairie, security company in Mansfield, security company in Fort Worth, security company in Hurst, security company in Euless, security company in Bedford, security company in Pantego, security company in Dalworthington Gardens, Joint Power Security Arlington" />
    <meta name="author" content="Joint Power Security Services Inc." />
</Head>
  }

  return (
    <CityLayout 
    renderHead={renderHead}
        name={'Arlington'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214874.23064364571!2d-97.30022614137545!3d32.70173523183762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62d2e40898d3%3A0xb5ef6ac1fa05351!2sArlington%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618634786!5m2!1sen!2sng"}
        state={'Texas'}
      >
        <p className='mb-5 leading-6 tracking-wide text-sm'>
        JOINT POWER SECURITY SERVICES INC continues to be the most trusted security guard company in Arlington, Texas. Our professionally trained and licensed security teams provide unmatched services to businesses, events, and private clients searching for answers to their security problems. When they need reliable, professional security guards they can trust, they call JOINT POWER SECURITY SERVICES INC.
        </p>
        <p className='mb-5 leading-6 tracking-wide text-sm'>
        As the leading security guard company in Arlington and the surrounding areas, JOINT POWER SECURITY SERVICES INC is proud of our reputation for providing the highest quality service at fair rates. We take training seriously and ensure that when a guard arrives on your premises, they are ready to work hard on your behalf. Security is serious business, and we treat all of our customers like their business is our own.
        </p>
        <p className='mb-5 leading-6 tracking-wide text-sm'>
        We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout Arlington and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events.
        </p>
        <p className='mb-5 leading-6 tracking-wide text-sm'>
          We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs.          
      </p>
  </CityLayout>
  )
}

export default SecurityGuardInCalifornia
