import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 


const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            JOINT POWER SECURITY SERVICES INC continues to be the most trusted security guard company in Arlington, Texas. Our professionally trained and licensed security teams provide unmatched services to businesses, events, and private clients searching for answers to their security problems. When they need reliable, professional security guards they can trust, they call JOINT POWER SECURITY SERVICES INC.             </p>
            <p className='my-5 leading-6 tracking-wide'>
            As the leading security guard company in Arlington and the surrounding areas, JOINT POWER SECURITY SERVICES INC is proud of our reputation for providing the highest quality service at fair rates. We take training seriously and ensure that when a guard arrives on your premises, they are ready to work hard on your behalf. Security is serious business, and we treat all of our customers like their business is our own.            
            <p className='my-5 leading-6 tracking-wide'>
            We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout Arlington and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events. 
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs            </p>
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            If you operate a business, manage events or require short-term / long-term security guards for personal or commercial needs, our highly-trained guards provide a variety of services to meet your needs. From mobile patrols and temporary assignments to VIP and executive protection, we have the staff you need to protect what is most valuable to you. We work with some of the finest guards available in the industry including off duty and retired law enforcement and military personnel. Our officers are bonded and insured so you can rest easy knowing that you have a trusted team on your side. And with training in the latest security strategies and technology, our guards can handle any risk that comes their way.             
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs           
            </p>
            <p className='leading-6 tracking-wide'>
            Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
        </p>
    </>
)


const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Arlington'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214874.23064364571!2d-97.30022614137545!3d32.70173523183762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62d2e40898d3%3A0xb5ef6ac1fa05351!2sArlington%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618634786!5m2!1sen!2sng"}
        Description={Description}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
