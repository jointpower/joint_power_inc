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
            Situated in San Diego County, California, Carlsbad is a vibrant city known for its scenic beauty, outdoor recreational opportunities, and thriving economy. With a population of over 115,000 residents and spanning approximately 39 square miles, Carlsbad has emerged as a prominent coastal community. Surrounded by cities like Oceanside and Encinitas, Carlsbad boasts a diverse economic landscape driven by industries such as technology, tourism, and biotechnology.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security remains a top priority in Carlsbad, where the Carlsbad Police Department (CPD) plays a pivotal role in ensuring the safety and well-being of the community. Recognized for their professionalism and dedication, the CPD works tirelessly to uphold law and order. Through proactive policing strategies and community engagement efforts, the CPD addresses various security challenges, fostering a sense of security and peace of mind among residents and visitors alike.
            <p className='mb-5 leading-6 tracking-wide'>
            In addition to the efforts of law enforcement, private security firms such as Carlsbad Security Solutions also play a crucial role in enhancing safety within the city. Specializing in providing customized security solutions for businesses, residential neighborhoods, and special events, Carlsbad Security Solutions offers a comprehensive range of services, including surveillance, access control, and security patrols. Their experienced team of security professionals is committed to delivering top-notch security services, ensuring the protection of Carlsbad's residents and properties.
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
        name={'Carlsbad'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106928.8938270301!2d-117.37020397725605!3d33.121492433202995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc73453f3bee59%3A0xa4cb5592fcf65d2f!2sCarlsbad%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709491806203!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
