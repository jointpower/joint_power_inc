import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 
 
const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            Situated in the western region of Texas, El Paso stands as a dynamic city celebrated for its distinct cultural fusion, historical importance, and thriving economy. Hosting a populace exceeding 600,000 inhabitants and stretching across roughly 250 square miles, El Paso serves as a pivotal urban hub within the Lone Star State. Surrounded by adjacent areas like Ciudad Juárez across the border in Mexico and Las Cruces in New Mexico, El Paso flourishes with diverse economic sectors, including commerce, healthcare, and military affairs.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Ensuring safety takes precedence in El Paso, where the El Paso Police Department (EPPD) assumes a vital role in maintaining lawfulness and order. Acknowledged for their expertise and unwavering commitment to public welfare, the EPPD tirelessly works to safeguard residents and visitors alike. Employing proactive policing methodologies and fostering community engagement, the EPPD tackles an array of security challenges, instilling a sense of protection throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            Complementing the efforts of law enforcement, independent security firms such as El Paso Security Solutions also play a significant role in fortifying security within the city. Specializing in tailored security solutions for various entities including businesses, residential areas, and special events, El Paso Security Solutions offers an extensive range of services, encompassing surveillance, access control, and security patrols. With a proficient team of security specialists, the firm is steadfast in providing high-quality security services, preserving the safety of El Paso's communities and assets.
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
        name={'El Paso'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433987.11815502855!2d-106.75418084370594!3d31.810710423313893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e73f8bc5fe3b69%3A0xe39184e3ab9d0222!2sEl%20Paso%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618798939!5m2!1sen!2sng"}
        Description={Description}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
