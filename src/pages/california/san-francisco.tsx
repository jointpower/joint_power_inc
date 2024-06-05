import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 


const SecurityGuardInCalifornia = () => {

  const renderHead = () => {
    return  <Head>
    <title>Security Guard Company in San Francisco & Oakland | Joint Power Security Services Inc.</title>
    <meta name="description" content="Hire professional security guards in San Francisco & Oakland with Joint Power Security Services Inc. We offer reliable and affordable security solutions for businesses, events, and personal needs." />
    <meta name="keywords" content="security guard services San Francisco, security company in San Francisco, hire security guards San Francisco, fire watch services San Francisco, event security San Francisco, VIP protection San Francisco, mobile patrols San Francisco, access management San Francisco, commercial security San Francisco, homeless security in San Francisco, construction site security San Francisco, warehouse security San Francisco, Firewatch Guard San Francisco, Apartment security san Francisco, Firewatch Guard Oakland, Firewatch Guard daly city, Firewatch service san jose, Firewatch service Redwood City,  Firewatch Guard Berkeley,  security company Berkeley, construction site security Oakland, security company near me, Security company in Oakland, Security company in San Jose, Security company in Redwood City, Security company in Daly City, Security company in San Mateo, Emergency security San Francisco, Joint Power Security San Francisco" />
    <meta name="author" content="Joint Power Security Services Inc." />
</Head>
  }

  return (
    <CityLayout 
    renderHead={renderHead}
        name={'San Francisco & Oakland'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.18159988272!2d-122.52000171794406!3d37.75767131454352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709492577923!5m2!1sen!2sng"}
        >
          <>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
            JOINT POWER SECURITY SERVICES INC continues to be the premier security guard company in San Francisco, California Oakland, San Jose, Redwood City, Daly City, San Mateo and all cities in the bay area. Our professionally trained and licensed security teams provide unmatched services to San Francisco's businesses, events, and private clients searching for answers to their security problems. When they need reliable, professional security guards they can trust, they call JOINT POWER SECURITY SERVICES INC.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          As the leading security guard company in San Francisco & Oakland and the surrounding areas, JOINT POWER SECURITY SERVICES INC is proud of our reputation for providing the highest quality service at fair rates. We take training seriously and ensure that when a guard arrives on your premises, they are ready to work hard on your behalf. Security is serious business, and we treat all of our customers like their business is our own.          
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout San Francisco & Oakland and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events.          
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout San Francisco & Oakland and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events.          
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs.          
          </p>
          </>
    </CityLayout>
  )
}

export default SecurityGuardInCalifornia
