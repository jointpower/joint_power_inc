import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 
 
const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            Located in North Texas, Dallas stands as a dynamic city renowned for its rich history, diverse culture, and robust economy. With a population exceeding 1.3 million residents and covering approximately 385 square miles, Dallas serves as a significant urban center within the Lone Star State. Surrounded by neighboring cities such as Fort Worth and Plano, Dallas thrives on its diverse economy driven by industries such as finance, telecommunications, and transportation.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security remains a top priority in Dallas, where the Dallas Police Department (DPD) plays a crucial role in maintaining law and order. Renowned for their professionalism and dedication to serving the community, the DPD works tirelessly to ensure the safety and security of residents and visitors alike. Through proactive policing strategies and community engagement efforts, the DPD addresses a wide range of security challenges, fostering a sense of safety and well-being throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            In addition to the efforts of law enforcement, private security firms such as Dallas Security Solutions also play a vital role in enhancing security within the city. Specializing in providing tailored security solutions for businesses, residential neighborhoods, and special events, Dallas Security Solutions offers a comprehensive range of services, including surveillance, access control, and security patrols. Their experienced team of security professionals is committed to delivering top-notch security services, ensuring the protection of Dallas's residents and properties.
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
        name={'Dallas'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429176.9100843101!2d-97.06121509403876!3d32.820232566642844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618112110!5m2!1sen!2sng"}
        Description={Description}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
