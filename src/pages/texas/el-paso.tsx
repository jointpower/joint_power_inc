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
    <title>Security Guard Company in El Paso | Joint Power Security Services Inc.</title>
    <meta name="description" content="Hire professional security guards in El Paso with Joint Power Security Services Inc. We offer reliable and affordable security solutions for businesses, events, and personal needs across all major cities in Texas." />
    <meta name="keywords" content="security guard services El Paso, security company in El Paso, hire security guards El Paso, fire watch services El Paso, event security El Paso, VIP protection El Paso, mobile patrols El Paso, access management El Paso, commercial security El Paso, Construction Site Security El Paso, Homeless security in El Paso, Hospital security in El Paso, Hotel Security in El Paso, warehouse security in El Paso, Security near me, Joint Power Security El Paso" />
    <meta name="author" content="Joint Power Security Services Inc." />
</Head>
  }

  return (
    <CityLayout 
    renderHead={renderHead}
        name={'El Paso'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433987.11815502855!2d-106.75418084370594!3d31.810710423313893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e73f8bc5fe3b69%3A0xe39184e3ab9d0222!2sEl%20Paso%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618798939!5m2!1sen!2sng"}
        state={'Texas'}
        >
          <>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          Businesses across the state of Texas and the city El Paso trust JOINT POWER SECURITY SERVICES INC for all of their security guard needs. We have been the leading provider of highly trained guards.  Our reputation for integrity, quality and affordability make us the first choice for business owners, organizations and private citizens throughout the city of El Paso facing security threats.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          JOINT POWER SECURITY SERVICES INC continues to be the most trusted security guard company in El Paso, Texas. Our professionally trained and licensed security teams provide unmatched services to businesses, events, and private clients searching for answers to their security problems. When they need reliable, professional security guards they can trust, they call JOINT POWER SECURITY SERVICES INC.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          As the leading security guard company in El Paso and the surrounding areas, JOINT POWER SECURITY SERVICES INC is proud of our reputation for providing the highest quality service at fair rates. We take training seriously and ensure that when a guard arrives on your premises, they are ready to work hard on your behalf. Security is serious business, and we treat all of our customers like their business is our own. 
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout El Paso and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events. 
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs.          
          </p>
        </>
    </CityLayout>
  )
}

export default SecurityGuardInCalifornia
