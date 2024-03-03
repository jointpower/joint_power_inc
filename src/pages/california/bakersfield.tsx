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
            Situated in California's fertile Central Valley, Bakersfield is a vibrant city known for its rich agricultural heritage, diverse population, and thriving economy. With a population exceeding 380,000 residents and covering approximately 151 square miles, Bakersfield stands as a significant urban center within Kern County. Surrounded by neighboring cities such as Delano and Tehachapi, Bakersfield thrives on its robust economy driven by industries such as oil and gas, agriculture, and manufacturing.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Ensuring security remains a top priority in Bakersfield, where the Bakersfield Police Department (BPD) plays a crucial role in maintaining law and order. Recognized for their professionalism and dedication to serving the community, the BPD works tirelessly to ensure the safety and security of residents and visitors alike. Through proactive policing strategies and community engagement efforts, the BPD addresses a wide range of security challenges, fostering a sense of safety and well-being throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            In addition to the efforts of law enforcement, private security firms such as Bakersfield Security Solutions also play a vital role in enhancing security within the city. Specializing in providing customized security solutions for businesses, residential neighborhoods, and special events, Bakersfield Security Solutions offers a comprehensive range of services, including surveillance, access control, and security patrols. Their experienced team of security professionals is committed to delivering top-notch security services, ensuring the protection of Bakersfield's residents and properties.
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
        name={'Bakersfield'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208345.50899325017!2d-119.18349946115573!3d35.32092262873064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6bc8b994cb0d%3A0x59360c0998fe74c8!2sBakersfield%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709493087203!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
