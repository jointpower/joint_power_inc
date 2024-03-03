import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 

 
const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            Located at the confluence of the Sacramento and American Rivers, Sacramento is a vibrant city known for its rich history, diverse culture, and thriving economy. With a population exceeding 500,000 residents and covering approximately 100 square miles, Sacramento stands as a significant urban center within Northern California. Surrounded by neighboring cities such as Davis and Elk Grove, Sacramento thrives on its robust economy driven by industries such as government, healthcare, and technology.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security remains a top priority in Sacramento, where the Sacramento Police Department (SPD) plays a crucial role in maintaining law and order. Renowned for their professionalism and dedication to serving the community, the SPD works tirelessly to ensure the safety and security of residents and visitors alike. Through proactive policing strategies and community engagement efforts, the SPD addresses a wide range of security challenges, fostering a sense of safety and well-being throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            In addition to the efforts of law enforcement, private security firms such as Sacramento Security Solutions also play a vital role in enhancing security within the city. Specializing in providing tailored security solutions for businesses, residential neighborhoods, and special events, Sacramento Security Solutions offers a comprehensive range of services, including surveillance, access control, and security patrols. Their experienced team of security professionals is committed to delivering top-notch security services, ensuring the protection of Sacramento's residents and properties.
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
        name={'Sacramento'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.65307277394!2d-121.62624174124278!3d38.56161840982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709493388433!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
