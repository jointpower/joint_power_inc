import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 


const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            Nestled in North Texas, Arlington stands out as a vibrant city celebrated for its diverse community, rich history, and thriving economy. Home to over 400,000 residents and sprawling across approximately 100 square miles, Arlington serves as a significant urban center within the Lone Star State. Surrounded by neighboring cities such as Fort Worth and Grand Prairie, Arlington thrives on its diverse economic sectors, including education, healthcare, and entertainment.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security remains a top priority in Arlington, where the Arlington Police Department (APD) plays a crucial role in maintaining law and order. Known for their professionalism and commitment to community service, the APD diligently works to ensure the safety and security of residents and visitors alike. Through proactive policing strategies and community engagement efforts, the APD addresses a wide range of security challenges, fostering a sense of safety and well-being throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            In addition to law enforcement efforts, private security firms like Arlington Security Solutions also contribute significantly to enhancing security within the city. Specializing in providing tailored security solutions for businesses, residential neighborhoods, and special events, Arlington Security Solutions offers a comprehensive range of services, including surveillance, access control, and security patrols. Their experienced team of security professionals is dedicated to delivering top-notch security services, ensuring the protection of Arlington's residents and properties.
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
        name={'Arlington'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214874.23064364571!2d-97.30022614137545!3d32.70173523183762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62d2e40898d3%3A0xb5ef6ac1fa05351!2sArlington%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618634786!5m2!1sen!2sng"}
        Description={Description}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
