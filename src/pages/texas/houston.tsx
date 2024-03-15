import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 
 
const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Houston'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443090.692768865!2d-95.73095659905265!3d29.816768799867795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709617858349!5m2!1sen!2sng"}
        state={'Texas'}
        >
            <>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          As one of the top five most populated and busy cities in the country, Houston is a metropolis bustling with industry and athletics. Houston is a hub for big-name companies in industries such as energy, biomedical, aeronautics, manufacturing and healthcare. The city is also home to the Texas Medical Center, NASA’s Johnson Space Center and various major league sports teams.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          For businesses and executives in the Houston area, security is a top concern. Too many high-value assets should be protected all time.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          JOINT POWER SECURITY SERVICES INC continues to be the most trusted security guard company in Houston, Texas. Our professionally trained and licensed security teams provide unmatched services to businesses, events, and private clients searching for answers to their security problems. When they need reliable, professional security guards they can trust, they call JOINT POWER SECURITY SERVICES INC.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          As the leading security guard company in Houston and the surrounding areas, JOINT POWER SECURITY SERVICES INC is proud of our reputation for providing the highest quality service at fair rates. We take training seriously and ensure that when a guard arrives on your premises, they are ready to work hard on your behalf. Security is serious business, and we treat all of our customers like their business is our own.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout Houston and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events.
          </p>
          <p className='mb-5 leading-6 tracking-wide text-sm'>
          We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs.          
          </p>
        </>
      </CityLayout>
  )
}

export default SecurityGuardInCalifornia
