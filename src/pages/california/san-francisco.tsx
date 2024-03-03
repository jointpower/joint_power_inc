import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 


const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            Nestled on the picturesque shores of California's Bay Area, San Francisco is a dynamic city renowned for its iconic landmarks, diverse culture, and thriving economy. With a population exceeding 880,000 residents and spanning approximately 46.9 square miles, San Francisco stands as a prominent urban center within Northern California. Surrounded by neighboring cities such as Oakland and San Jose, San Francisco thrives on its robust economy driven by industries such as technology, tourism, and finance.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security remains a top priority in San Francisco, where the San Francisco Police Department (SFPD) plays a crucial role in maintaining law and order. Recognized for their professionalism and dedication to serving the community, the SFPD works tirelessly to ensure the safety and security of residents and visitors alike. Through proactive policing strategies and community engagement efforts, the SFPD addresses a wide range of security challenges, fostering a sense of safety and well-being throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            In addition to the efforts of law enforcement, private security firms such as San Francisco Security Solutions also play a vital role in enhancing security within the city. Specializing in providing customized security solutions for businesses, residential neighborhoods, and special events, San Francisco Security Solutions offers a comprehensive range of services, including surveillance, access control, and security patrols. Their experienced team of security professionals is committed to delivering top-notch security services, ensuring the protection of San Francisco's residents and properties.
            </p>
            </p>
            <p className='leading-6 tracking-wide'>
            Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
        </p>
    </>
)


const SecurityGuardInCalifornia = () => {

  return (
    <CityLayout 
        name={'San Francisco'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.18159988272!2d-122.52000171794406!3d37.75767131454352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709492577923!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
