import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 
 
const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            Nestled in the heart of Texas, Houston stands as a dynamic metropolis celebrated for its vibrant culture, storied past, and thriving economy. Boasting a population surpassing 2 million residents and sprawling across approximately 600 square miles, Houston serves as a prominent urban hub within the Lone Star State. Surrounded by neighboring cities like Sugar Land and Pasadena, Houston flourishes with a diverse economy driven by sectors such as energy, healthcare, and aerospace.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security holds paramount importance in Houston, where the Houston Police Department (HPD) assumes a pivotal role in upholding law and order. Renowned for their professionalism and unwavering commitment to community service, the HPD diligently works to ensure the safety and security of both locals and visitors. Employing proactive policing strategies and fostering community engagement, the HPD tackles various security challenges, instilling a sense of safety and reassurance across the city.
            <p className='my-5 leading-6 tracking-wide'>
            In addition to law enforcement efforts, private security firms like Houston Security Solutions also contribute significantly to bolstering security within the city. Specializing in tailored security solutions for businesses, residential areas, and special events, Houston Security Solutions offers a comprehensive array of services, including surveillance, access control, and security patrols. Their adept team of security experts is dedicated to delivering top-tier security services, safeguarding the well-being of Houston's residents and properties.
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
        name={'Houston'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443090.692768865!2d-95.73095659905265!3d29.816768799867795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709617858349!5m2!1sen!2sng"}
        Description={Description}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
