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
    return <Head>
    <title>Security Guard Company in Los Angeles | Joint Power Security Services Inc.</title>
    <meta name="description" content="Hire highly trained and professional security guards in Los Angeles with Joint Power Security Services Inc. We offer customized security solutions for businesses, events, and personal needs" />
    <meta name="keywords" content="security guard services Los Angeles, security company in los Angeles, hire security guards los Angeles, fire watch services Los Angeles, Warehouse security Los angeles,  homeless security los angeles, construction site security, security in santa Clarita, security in downtown los angeles,  security in commerce, security in Inglewood,  Security near me, security in city of industry,  security in Gardena, emergency security, event security Los Angeles, VIP protection Los Angeles, mobile patrols Los Angeles, access management Los Angeles, commercial security Los Angeles, Joint Power Security Los Angeles, Hotel security Los Angeles,  Hospital security Los Angeles, security company Beverly Hills, security company Long Beach,  security company Torrance,  security company Compton,  security company Culver City,  Security company Downey, security company Santa Monica, security company Pasadena, Apartment security near me, security company Hollywood, security company Van Nuys, security company Glendale, security company Burbank, security company Sherman Oaks, security company San Fernando, security company studio city" />
    <meta name="author" content="Joint Power Security Services Inc." />
</Head>
  }

  return (
    <CityLayout 
        name={'Los Angeles'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.882939841!2d-118.74139394374271!3d34.02003920943825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709490723033!5m2!1sen!2sng"}
        isLosAngeles={true}
        renderHead={renderHead}
        >
          <></>
    </CityLayout>
  )
}

export default SecurityGuardInCalifornia
