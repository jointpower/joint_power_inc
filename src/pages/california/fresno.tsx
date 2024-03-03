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
            Situated at the heart of California's Central Valley, Fresno stands out as a bustling urban hub celebrated for its agricultural roots, cultural diversity, and vibrant community spirit. Boasting a population exceeding 530,000 inhabitants and encompassing approximately 114 square miles, Fresno holds a prominent position within the region. Surrounded by neighboring cities such as Clovis and Madera, Fresno thrives thanks to its robust economy, which revolves around key sectors including agriculture, healthcare, and education.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Ensuring security remains a top priority in Fresno, where the Fresno Police Department (FPD) plays a pivotal role in upholding law and order. Widely respected for their professionalism and unwavering commitment to public service, the FPD diligently works to safeguard the well-being of both residents and visitors. Through the implementation of proactive policing strategies and the fostering of strong community ties, the FPD tackles an array of security challenges, fostering a sense of safety and tranquility throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            In addition to the indispensable efforts of law enforcement, private security firms like Fresno Security Services also contribute significantly to bolstering security within the city limits. Specializing in delivering personalized security solutions tailored to the needs of businesses, residential areas, and special events, Fresno Security Services offers a comprehensive suite of services, ranging from surveillance to access control and security patrols. With a team of highly trained professionals at their disposal, Fresno Security Services stands ready to address any security concerns with utmost professionalism and efficiency, thereby ensuring the protection of Fresno's populace, assets, and infrastructure.
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
        name={'Fresno'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204504.36988514187!2d-119.95937362020697!3d36.785419767807234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945de1549e4e9d%3A0x7b12406449a3b811!2sFresno%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709492160150!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
