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
    <title>Security Guard Company in Anaheim | Joint Power Security Services Inc.</title>
    <meta name="description" content="Hire professional security guards in Anaheim with Joint Power Security Services Inc. We offer reliable and affordable security solutions for businesses, events, and personal needs" />
    <meta name="keywords" content="security guard services Anaheim, security company in Anaheim, hire security guards Anaheim, fire watch services Anaheim, event security Anaheim, VIP protection Anaheim, mobile patrols Anaheim, access management Anaheim, commercial security Anaheim, Homeless security in Anaheim, construction site security Anaheim, warehouse security Anaheim, Firewatch Guard Anaheim, Security company in Norwalk,Security company in Garden Grove, Security company in Buena Park, Emergency security Anaheim, Joint Power Security Anaheim" />
    <meta name="author" content="Joint Power Security Services Inc." />
</Head>
  }

  return (
    <CityLayout 
    renderHead={renderHead}
        name={'Anaheim'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424219.4426378678!2d-118.4364205342094!3d33.83258121097686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd6f98055e867%3A0x1ab89ab9a2bb160!2sAnaheim%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709491564261!5m2!1sen!2sng"}
        >
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          Anaheim, California is the largest city in Orange County and the home to some of the country’s most visited amusement parks and professional sporting venues, but it’s not all fun and games. Security is still a top concern for businesses and theme park operators as well as residents and tourists. If you live or work in Anaheim or the surrounding area and need the best in professional security guards, contact the experts at JOINT POWER SECURITY SERVICES INC today. 
        </p>
    </CityLayout>
  )
}

export default SecurityGuardInCalifornia
