import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 

 
const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            Nestled in Central Texas, Austin stands out as a vibrant city celebrated for its eclectic culture, deep-rooted history, and thriving economy. Home to over 1 million residents and spanning roughly 300 square miles, Austin serves as a significant urban center within the Lone Star State. Surrounded by neighboring areas like Round Rock and Cedar Park, Austin's economy flourishes with a diverse mix of industries, including technology, music, and education.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security takes precedence in Austin, where the Austin Police Department (APD) plays a pivotal role in maintaining law and order. Known for their professionalism and unwavering dedication, the APD diligently works to ensure the safety and security of Austin's residents and visitors. Through proactive policing strategies and community engagement initiatives, the APD addresses various security challenges, fostering a sense of safety across the city.
            <p className='my-5 leading-6 tracking-wide'>
            Private security firms, such as Austin Security Solutions, also contribute significantly to bolstering security within the city. Specializing in tailored security solutions for businesses, neighborhoods, and events, Austin Security Solutions offers a comprehensive range of services, including surveillance and access control. Their skilled team of security professionals is committed to delivering top-tier security services, safeguarding Austin's communities and properties.
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
        name={'Austin'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440900.2508945735!2d-98.08540718840314!3d30.307347705980646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618280617!5m2!1sen!2sng"}
        Description={Description}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
