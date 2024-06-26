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
  <title>Security Guard Company in Sacramento & Stockton | Joint Power Security Services Inc.</title>
  <meta name="description" content="Hire professional security guards in Sacramento & Stockton with Joint Power Security Services Inc. We offer reliable and affordable security solutions for businesses, events, and personal needs." />
  <meta name="keywords" content="security guard service Sacramento, security company in Sacramento, hire security guards Sacramento, fire watch services Sacramento, event security Sacramento, VIP protection Sacramento, mobile patrols Sacramento, access management Sacramento, commercial security Sacramento, homeless security in Sacramento, construction site security Sacramento, warehouse security Sacramento, Firewatch Guard Sacramento, Security company in Stockton, Security company in Napa, Security company in Elk Grove, Security company in Citrus Heights, Security company in Rancho Cordova, Emergency security Sacramento, security company in Modesto, security company in Fairﬁeld, security company Dixon, Apartment security in Sacramento,  Hospital security in Sacramento, security company vacaville, Joint Power Security Sacramento" />
  <meta name="author" content="Joint Power Security Services Inc." />
</Head>
}

  return (
    <CityLayout 
    renderHead={renderHead}
        name={'Sacramento & Stockton'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.65307277394!2d-121.62624174124278!3d38.56161840982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709493388433!5m2!1sen!2sng"}
        >
           <>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          JOINT POWER SECURITY SERVICES INC continues to be the most trusted security guard company in Sacramento & Stockton, California. Our professionally trained and licensed security teams provide unmatched services to businesses, events, and private clients searching for answers to their security problems. When they need reliable, professional security guards they can trust, they call JOINT POWER SECURITY SERVICES INC.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          As the leading security guard company in Sacramento & Stockton and the surrounding areas, JOINT POWER SECURITY SERVICES INC is proud of our reputation for providing the highest quality service at fair rates. We take training seriously and ensure that when a guard arrives on your premises, they are ready to work hard on your behalf. Security is serious business, and we treat all of our customers like their business is our own.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout Sacramento & Stockton and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs.          
          </p>
        </>
    </CityLayout>
  )
}

export default SecurityGuardInCalifornia
