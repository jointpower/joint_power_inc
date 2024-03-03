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
            Positioned in the scenic Northern California region, Redding is a vibrant city celebrated for its natural beauty, outdoor recreational opportunities, and close-knit community. With a population surpassing 92,000 residents and spanning around 61.2 square miles, Redding holds a significant presence within Shasta County. Surrounded by picturesque landscapes and neighboring cities such as Anderson and Shasta Lake, Redding thrives on its diverse economy fueled by industries such as healthcare, tourism, and manufacturing.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Maintaining security is a top priority in Redding, where the Redding Police Department (RPD) plays a pivotal role in upholding law and order. Respected for their professionalism and commitment to public safety, the RPD diligently works to safeguard the well-being of both residents and visitors. Through proactive policing strategies and community partnerships, the RPD addresses various security challenges, promoting a sense of safety and tranquility throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            Complementing law enforcement efforts, private security firms like Redding Security Services also contribute significantly to bolstering security within the city. Specializing in providing tailored security solutions for businesses, residential neighborhoods, and special events, Redding Security Services offers a comprehensive range of services, including surveillance, access control, and security patrols. With a team of highly trained professionals at their disposal, Redding Security Services stands ready to address any security concerns with utmost professionalism and efficiency, thereby ensuring the protection of Redding's populace, assets, and infrastructure.
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
        name={'Redding'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193953.81530573414!2d-122.52583083531712!3d40.5740913415914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d291d63b4a202f%3A0x1f3358ec7b360f57!2sRedding%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709492792086!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
