import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 


const SecurityGuardInCalifornia = () => {

  return (
    <CityLayout 
        name={'Fresno'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204504.36988514187!2d-119.95937362020697!3d36.785419767807234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945de1549e4e9d%3A0x7b12406449a3b811!2sFresno%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709492160150!5m2!1sen!2sng"}
        >
          <>
            <p className='mb-5 leading-6 tracking-wide text-sm'>
              JOINT POWER SECURITY SERVICES INC is one of the leading security guard services companies in Fresno. Many businesses and people call Fresno, California home. As the largest city in inland California with a 2020 census population of over 540,000 people, Fresno is a hub of agriculture, education and business. As such, those who are responsible for the safety of customers, students and employees seek to find the best that the security guard industry has to offer. When they need reliable, professional security guards they can trust, they call JOINT POWER SECURITY SERVICES INC.
            </p>
            <p className='mb-5 leading-6 tracking-wide text-sm'>
            As the leading security guard company in Fresno and the surrounding areas, JOINT POWER SECURITY SERVICES INC is proud of our reputation for providing the highest quality service at fair rates. We take training seriously and ensure that when a guard arrives on your premises, they are ready to work hard on your behalf. Security is serious business, and we treat all of our customers like their business is our own.            </p>
            <p className='mb-5 leading-6 tracking-wide text-sm'>
            We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout Fresno and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events.            </p>
            <p className='mb-5 leading-6 tracking-wide text-sm'>
            We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout Fresno and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events.            </p>
          </>
  </CityLayout>
  )
}

export default SecurityGuardInCalifornia
