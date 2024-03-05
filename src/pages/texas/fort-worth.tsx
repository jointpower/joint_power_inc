import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 
 
const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            Situated in North Texas, Fort Worth stands as a bustling city renowned for its rich heritage, diverse culture, and thriving economy. Boasting a population exceeding 900,000 residents and encompassing approximately 350 square miles, Fort Worth holds a prominent position as a major urban center within the Lone Star State. Surrounded by neighboring communities such as Arlington and Irving, Fort Worth thrives on a varied economic landscape, with sectors including manufacturing, logistics, and aerospace.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security remains a paramount concern in Fort Worth, with the Fort Worth Police Department (FWPD) playing a pivotal role in upholding law and order. Known for their professionalism and steadfast commitment, the FWPD diligently works to ensure the safety and security of both residents and visitors. Through proactive policing strategies and community outreach efforts, the FWPD addresses a wide spectrum of security challenges, fostering a sense of safety and well-being throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            Complementing law enforcement efforts, private security firms like Fort Worth Security Solutions also play a crucial role in enhancing security within the city. Specializing in tailored security solutions for businesses, residential areas, and special events, Fort Worth Security Solutions offers an array of services, including surveillance, access control, and security patrols. With a dedicated team of security experts, the firm strives to deliver top-notch security services, safeguarding Fort Worth's populace and assets.
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
        name={'Fort Worth'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429272.7882295859!2d-97.61898151196158!3d32.80038110222982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sFort%20Worth%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618452537!5m2!1sen!2sng"}
        Description={Description}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
